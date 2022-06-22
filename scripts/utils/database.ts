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
export const setProduct = (microsoftProduct: MicrosoftProduct) =>
  writeJson(`rawProduct/${microsoftProduct.ProductId}.json`, microsoftProduct);
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
export const getMicrosoftProducts = async () => {
  const products: Record<string, MicrosoftProduct> = {};
  await onEachRawProductData((microsoftProduct) => {
    products[microsoftProduct.ProductId] = microsoftProduct;
  });
  return products;
};
export const getMicrosoftProductIds = async (): Promise<Array<string>> => {
  const files = await readdir(`rawProduct`);
  return files.map((value) => value.replace(`.json`, ``));
};

/*
  Images
*/
export const getProductImageIds = async (): Promise<Array<string>> => {
  const files = await readdir(`images/microsoftImages`);
  return files.map((value) => value.replace(`.jpeg`, ``));
};
export const getProductImage = (productId: string) =>
  read(`./scripts/data/images/microsoftImages/${productId}.jpeg`);
