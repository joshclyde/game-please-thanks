import axios from "axios";
import {
  outputJson as fsOutputJson,
  readJson as fsReadJson,
  readdir as fsreaddir,
  readJsonSync as fsReadJsonSync,
  pathExists as fsPathExists,
} from "fs-extra";

import { MicrosoftProduct, Game, GamePassResponse } from "../types";

// Makes sure we always write our data into a data folder inside scripts.
const writeJson = (path: string, data: any) =>
  fsOutputJson(`./scripts/data/${path}`, data);
const readJson = (path: string) => fsReadJson(`./scripts/data/${path}`);
const readJsonSync = (path: string) => fsReadJsonSync(`./scripts/data/${path}`);
const readdir = (path: string) => fsreaddir(`./scripts/data/${path}`);
const doesPathExist = (path: string) => fsPathExists(`./scripts/data/${path}`);

export const writeMicrosoftProductToFile = (microsoftProduct: MicrosoftProduct) =>
  writeJson(`rawProduct/${microsoftProduct.ProductId}.json`, microsoftProduct);

export const writeGameToFile = (game: Game) => writeJson(`game/${game.id}.json`, game);

export const readGamePassResponse = () => readJson(`gamePass.json`);
export const writeGamePassResponseToFile = (gamePassResponse: GamePassResponse) =>
  writeJson(`gamePass.json`, gamePassResponse);

export const readGamesFile = (): Promise<Record<string, Game>> => readJson(`games.json`);

export const writeGamesToFile = (games: Record<string, Game>) =>
  writeJson(`games.json`, games);

export const readMegaList = (): Promise<{ productIds: Array<string> }> =>
  readJson(`megaList.json`);

export const appendProductIdsToMegaList = async (productIds: Array<string>) => {
  const { productIds: megaProductIds } = await readMegaList();
  const filteredProductIds = productIds.filter((id) => !megaProductIds.includes(id));
  await writeJson(`megaList.json`, {
    productIds: [...megaProductIds, ...filteredProductIds],
  });
};

export const readRawProductData = (id: string) => readJson(`rawProduct/${id}`);

export const readAllGamePassIds = async () => {
  const gamePassResponse: GamePassResponse = await readGamePassResponse();
  const ids = gamePassResponse.reduce<Array<string>>((accumulatedIds, { id }) => {
    if (id) {
      accumulatedIds.push(id);
    }
    return accumulatedIds;
  }, []);
  return ids;
};

export const getAllMicrosoftProductIds = async (): Promise<Array<string>> => {
  const files = await readdir(`rawProduct`);
  return files.map((value) => value.replace(`.json`, ``));
};

export const onEachRawProductData = async (
  operation: (rawProduct: MicrosoftProduct) => void,
) => {
  const files: Array<string> = await readdir(`rawProduct/`);
  const promises: Array<Promise<void>> = [];
  files.forEach((path) => {
    const doOperation = async () => {
      const rawProduct = await readJson(`rawProduct/${path}`);
      await operation(rawProduct);
    };
    promises.push(doOperation());
  });
  await Promise.all(promises);
};

export const readAllMicrosoftProductData = async () => {
  const products: Record<string, MicrosoftProduct> = {};
  await onEachRawProductData((micrsoftProduct) => {
    products[micrsoftProduct.ProductId] = micrsoftProduct;
  });
  return products;
};

export const readMicrosoftProductSync = (id: string) =>
  readJsonSync(`rawProduct/${id}.json`);

export const getIsBundle = (microsoftProduct: MicrosoftProduct) =>
  microsoftProduct.DisplaySkuAvailabilities[0].Sku.Properties.IsBundle;

export const getProductType = (microsoftProduct: MicrosoftProduct) =>
  microsoftProduct.ProductType;

export const getImageUrl = (microsoftProduct: MicrosoftProduct, imagePurpose: string) => {
  const uri = microsoftProduct.LocalizedProperties[0].Images.find(
    ({ ImagePurpose }) => ImagePurpose === imagePurpose,
  )?.Uri;
  if (uri) {
    return `https:${uri}`;
  }
  return undefined;
};

export const getBundleProductIds = (microsoftProduct: MicrosoftProduct): Array<string> =>
  microsoftProduct.DisplaySkuAvailabilities[0].Sku.Properties.BundledSkus.map(
    ({ BigId }) => BigId,
  );

/*
  Takes the response from "https://displaycatalog.mp.microsoft.com/v7.0/products"
  and writes each product to a file.
*/
export const writeResponseToFiles = (response: { Products: Array<MicrosoftProduct> }) => {
  return new Promise<void>((res, rej) => {
    let count = 0;
    response.Products.forEach((productData) => {
      const save = async () => {
        try {
          await writeMicrosoftProductToFile(productData);
        } catch (err) {
          console.log(`Error trying to save data for ${productData.ProductId}`);
        }
        count++;
        // Resolve promise when the last product has been saved.
        if (count === response.Products.length) {
          res();
        }
      };
      save();
    });
  });
};

export const doesMicrosoftImageExist = (game: Game) =>
  doesPathExist(`images/microsoftImages/${game.id}.jpeg`);

export const readMicrosoftImages = () => readdir(`images/microsoftImages`);

const getMin = (microsoftProduct: MicrosoftProduct) => {
  const value1 = microsoftProduct.Properties.Attributes?.find(
    ({ Name }) => Name === `XblOnlineCoop`,
  )?.Minimum;
  const value2 = microsoftProduct.Properties.Attributes?.find(
    ({ Name }) => Name === `XblOnlineMultiPlayer`,
  )?.Minimum;
  let possibleReturnValue;
  if (!value1 || !value2) {
    possibleReturnValue = value1 || value2 || 1;
  } else {
    possibleReturnValue = Math.min(value1, value2);
  }
  // if it says that the minimum players is "2" I want to change it to 1
  return possibleReturnValue < 3 ? 1 : possibleReturnValue;
};

const getMax = (microsoftProduct: MicrosoftProduct) => {
  const value1 = microsoftProduct.Properties.Attributes?.find(
    ({ Name }) => Name === `XblOnlineCoop`,
  )?.Maximum;
  const value2 = microsoftProduct.Properties.Attributes?.find(
    ({ Name }) => Name === `XblOnlineMultiPlayer`,
  )?.Maximum;
  if (!value1 || !value2) {
    return value1 || value2 || 1;
  }
  return Math.max(value1, value2);
};

export const convertMicrosoftProductToGame = (
  microsoftProduct: MicrosoftProduct,
  isOnGamePass: boolean,
): Game => {
  const urlTitle = microsoftProduct.DisplaySkuAvailabilities[0].Sku.LocalizedProperties[0].SkuTitle.replace(
    /[\W_]+/g,
    ` `,
  )
    .trim()
    .replace(` `, `-`)
    .toLowerCase();
  const game = {
    id: microsoftProduct.ProductId,
    name: microsoftProduct.LocalizedProperties[0].ProductTitle,
    minPlayers: getMin(microsoftProduct),
    maxPlayers: getMax(microsoftProduct),
    externalUrl: `https://www.microsoft.com/en-us/p/${urlTitle}/${microsoftProduct.ProductId}?activetab=pivot:overviewtab`,
    images: {
      TitledWide: {
        url: getImageUrl(microsoftProduct, `TitledHeroArt`),
      },
      TitledLong: {
        url: getImageUrl(microsoftProduct, `Poster`),
      },
      UntitledWide: {
        url: getImageUrl(microsoftProduct, `SuperHeroArt`),
      },
      UntitledSquare: {
        url: getImageUrl(microsoftProduct, `FeaturePromotionalSquareArt`),
      },
      TitledSquare: {
        url: getImageUrl(microsoftProduct, `BoxArt`),
      },
    },
    price:
      microsoftProduct.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData
        .Price.MSRP,
    isOnGamePass,
    size:
      microsoftProduct.DisplaySkuAvailabilities[0].Sku.Properties.Packages[0]
        .MaxDownloadSizeInBytes,
  };
  return game;
};

const _scrapeMicrosoftProducts = async (productIds: Array<string>) => {
  if (productIds.length > 20) {
    throw new Error(
      `The number of productIds exceeded the max number (20) you should request at one time.`,
    );
  }
  try {
    const url = `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${productIds.join()}&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp`;
    const response = await axios.get<{ Products: Array<MicrosoftProduct> }>(url);
    await writeResponseToFiles(response.data);
    console.log(`Successfully scraped ${productIds}`);
  } catch (error) {
    console.log(`Error scraping for ${productIds}. ${error.data}`);
  }
};

export const scrapeMicrosoftProducts = async (productIds: Array<string>) => {
  let promises: Array<Promise<void>> = [];
  for (let i = 0; i < productIds.length; i += 20) {
    promises.push(
      _scrapeMicrosoftProducts(
        productIds.slice(0 + i, Math.min(20 + i, productIds.length)),
      ),
    );
  }
  await Promise.all(promises);
};
