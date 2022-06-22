/*
  Utility functions to read/write from any data contained in a file.
*/

import {
  outputJson as fsOutputJson,
  pathExists as fsPathExists,
  readdir as fsreaddir,
  readJson as fsReadJson,
  readJsonSync as fsReadJsonSync,
} from "fs-extra";
import { read } from "jimp";

import { MicrosoftProduct, Game } from "../types";

const readdir = (path: string) => fsreaddir(`./scripts/data/${path}`);
const readJson = (path: string) => fsReadJson(`./scripts/data/${path}`);
const readJsonSync = (path: string) => fsReadJsonSync(`./scripts/data/${path}`);
const writeJson = (path: string, data: any) =>
  fsOutputJson(`./scripts/data/${path}`, data);
const doesPathExist = (path: string) => fsPathExists(`./scripts/data/${path}`);

/*
  Game
*/
export const setGame = (game: Game) => writeJson(`game/${game.id}.json`, game);

/*
  Games.json
*/
export const getGames = (): Promise<Record<string, Game>> => readJson(`games.json`);
export const setGames = (games: Record<string, Game>) => writeJson(`games.json`, games);

/*
  GamePass.json
*/
export const getGamePassProductIds = (): Promise<{ productIds: Array<string> }> =>
  fsReadJson(`./scripts/GamePass.json`);
export const setGamePassProductIds = async (productIds: Array<string>) => {
  await fsOutputJson(`./scripts/GamePass.json`, {
    productIds: productIds.map((id) => id.toUpperCase()).sort(),
  });
};

/*
  MegaList.json
*/
export const getMegaList = (): Promise<{ productIds: Array<string> }> =>
  fsReadJson(`./scripts/MegaList.json`);
export const addToMegaList = async (productIds: Array<string>) => {
  const { productIds: existingProductIds } = await getMegaList();
  const filteredProductIds = productIds
    .map((id) => id.toUpperCase()) // make sure product ids are always uppper case
    .filter((id) => !existingProductIds.includes(id)); // remove any duplicate product ids that are already in MegaList
  await fsOutputJson(`./scripts/MegaList.json`, {
    productIds: [...existingProductIds, ...filteredProductIds].sort(),
  });
};

/*
  MicrosoftProducts
*/

export const getProduct = (productId: string): Promise<MicrosoftProduct> =>
  readJson(`product/${productId}.json`);
export const setProduct = (microsoftProduct: MicrosoftProduct) =>
  writeJson(`product/${microsoftProduct.ProductId}.json`, microsoftProduct);
export const getMicrosoftProductIds = async (): Promise<Array<string>> => {
  const files = await readdir(`product`);
  return files.map((value) => value.replace(`.json`, ``));
};
export const forEachProduct = async (operation: (product: MicrosoftProduct) => void) => {
  const productIds = await getMicrosoftProductIds();
  for (const productId of productIds) {
    const product = await getProduct(productId);
    await operation(product);
  }
};
export const getMicrosoftProducts = async (productIds?: Array<string>) => {
  const products: Record<string, MicrosoftProduct> = {};
  if (productIds) {
    for (const productId of productIds) {
      products[productId] = await getProduct(productId);
    }
  } else {
    await forEachProduct((product) => {
      products[product.ProductId] = product;
    });
  }
  return products;
};

/*
  Images
*/
export const getProductImageIds = async (): Promise<Array<string>> => {
  const files = await readdir(`productImage`);
  return files.map((value) => value.replace(`.jpeg`, ``));
};
export const getProductImage = (productId: string) =>
  read(`./scripts/data/productImage/${productId}.jpeg`);
