import { MicrosoftProduct, Game } from "../types";

// TODO: clean this up

export const getIsBundle = (microsoftProduct: MicrosoftProduct) =>
  Boolean(microsoftProduct.DisplaySkuAvailabilities?.[0].Sku.Properties.IsBundle);

export const getBundleProductIds = (
  microsoftProduct: MicrosoftProduct,
): Array<string> => {
  return (
    microsoftProduct.DisplaySkuAvailabilities?.[0].Sku.Properties?.BundledSkus?.map(
      ({ BigId }) => BigId,
    ) || []
  );
};

export const getProductType = (microsoftProduct: MicrosoftProduct) =>
  microsoftProduct.ProductType;

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

export const getImageUrl = (microsoftProduct: MicrosoftProduct, imagePurpose: string) => {
  const uri = microsoftProduct.LocalizedProperties?.[0].Images?.find(
    ({ ImagePurpose }) => ImagePurpose === imagePurpose,
  )?.Uri;
  if (uri) {
    return `https:${uri}`;
  }
  return undefined;
};

export const convertMicrosoftProductToGame = (
  microsoftProduct: MicrosoftProduct,
  isOnGamePass: boolean,
): Game => {
  const name = microsoftProduct.LocalizedProperties?.[0].ProductTitle;
  if (!name) {
    console.log(`No name for ${microsoftProduct.ProductId}`);
  }
  if (
    !microsoftProduct.DisplaySkuAvailabilities?.[0].Sku.Properties.Packages?.[0]
      ?.MaxDownloadSizeInBytes
  ) {
    console.log(`No size for ${microsoftProduct.ProductId} (${name})`);
  }
  const urlTitle = name
    ?.replace(/[\W_]+/g, ` `)
    .trim()
    .replace(` `, `-`)
    .toLowerCase();
  // const urlTitle = microsoftProduct.DisplaySkuAvailabilities?.[0].Sku.LocalizedProperties[0].SkuTitle.replace(
  //   /[\W_]+/g,
  //   ` `,
  // )
  //   .trim()
  //   .replace(` `, `-`)
  //   .toLowerCase();
  const game = {
    id: microsoftProduct.ProductId,
    name,
    minPlayers: getMin(microsoftProduct),
    maxPlayers: getMax(microsoftProduct),
    externalUrl: urlTitle
      ? `https://www.microsoft.com/en-us/p/${urlTitle}/${microsoftProduct.ProductId}?activetab=pivot:overviewtab`
      : `none`,
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
      microsoftProduct.DisplaySkuAvailabilities?.[0].Availabilities?.[0]
        .OrderManagementData.Price.MSRP,
    isOnGamePass,
    size:
      microsoftProduct.DisplaySkuAvailabilities?.[0].Sku.Properties.Packages?.[0]
        ?.MaxDownloadSizeInBytes,
  };
  return game;
};
