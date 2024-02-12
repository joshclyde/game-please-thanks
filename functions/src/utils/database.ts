/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-namespace */

// /*
//   Utility functions to read/write from any data contained in a file.
// */

import { log } from "firebase-functions/logger";

import { MicrosoftProduct } from "../types";

import { knownMegaList } from "./MegaList";

// import {
//   outputJson as fsOutputJson,
//   outputFile as fsOutputFile,
//   pathExists as fsPathExists,
//   readdir as fsreaddir,
//   readJson as fsReadJson,
//   readFile as fsReadFile,
//   readJsonSync as fsReadJsonSync,
// } from "fs-extra";

// import { MicrosoftProduct, Game, Data } from "../types";

// const readdir = (path: string) => fsreaddir(`./scripts/data/${path}`);
// const readJson = (path: string) => fsReadJson(`./scripts/data/${path}`);
// export const readFile = (path: string) => fsReadFile(`./scripts/data/${path}`, `utf8`);
// const readJsonSync = (path: string) => fsReadJsonSync(`./scripts/data/${path}`);
// const writeJson = (path: string, data: any) =>
//   fsOutputJson(`./scripts/data/${path}`, data);
// export const writeFile = (path: string, data: any) =>
//   fsOutputFile(`./scripts/data/${path}`, data);
// const doesPathExist = (path: string) => fsPathExists(`./scripts/data/${path}`);

// /*
//   Game
// */
// export const getGame = (gameId: string): Promise<Game> => readJson(`game/${gameId}.json`);
// export const setGame = (game: Game) => writeJson(`game/${game.id}.json`, game);

// /*
//   Games.json
// */
// export const getGames = (): Promise<Record<string, Game>> => readJson(`games.json`);
// export const setGames = (games: Record<string, Game>) => writeJson(`games.json`, games);

// /*
//   ProductPages
// */
// // TODO: move this into ProductPage class?
// export const setProductPage = (productId: string, data: any) =>
//   writeFile(`productPages/${productId}.html`, data);

// /*
//   Data.json
// */
// export const getData = (): Promise<Data> => readJson(`data.json`);
// export const setData = (data: Data) => writeJson(`data.json`, data);

// /*
//   GamePass.json
// */
let gamePassTrue: Array<string> = [];

export const getGamePassProductIds = () => gamePassTrue;
export const setGamePassProductIds = (productIds: Array<string>) => {
  gamePassTrue = productIds.map((id) => id.toUpperCase());
};

// /*
//   MegaList.json
// */
let megaListTrue: Array<string> = knownMegaList;

export const getMegaList = () => megaListTrue;

export const addToMegaList = (productIds: Array<string>) => {
  megaListTrue.push(
    ...productIds
      .map((id) => id.toUpperCase()) // make sure product ids are always uppper case
      .filter((id) => !megaListTrue.includes(id)), // remove any duplicate product ids that are already in MegaList
  );
  megaListTrue.sort();
};

// /*
//   MicrosoftProducts
// */

const microsoftProductsTrue: Record<string, MicrosoftProduct> = {};
log(`microsoftProductsTrue ${Object.keys(microsoftProductsTrue)}`);

export const getProduct = (productId: string): MicrosoftProduct =>
  microsoftProductsTrue[productId];
export const setProduct = (microsoftProduct: MicrosoftProduct) => {
  microsoftProductsTrue[microsoftProduct.ProductId] = microsoftProduct;
  // log(Object.keys(microsoftProductsTrue));
};
export const getMicrosoftProductIds = () => {
  return Object.keys(microsoftProductsTrue);
};
// export const forEachProduct = async (operation: (product: MicrosoftProduct) => void) => {
//   const productIds = await getMicrosoftProductIds();
//   for (const productId of productIds) {
//     const product = await getProduct(productId);
//     await operation(product);
//   }
// };
export const getMicrosoftProducts = () => {
  log(`microsoftProductsTrue in function ${Object.keys(microsoftProductsTrue)}`);
  log(`megaListTrue in function ${Object.keys(megaListTrue)}`);
  // const products: Record<string, MicrosoftProduct> = {};
  // if (productIds) {
  // for (const productId of productIds) {
  //   products[productId] = await getProduct(productId);
  // }
  // return Object.entries(microsoftProductsTrue).filter(x => x.)
  // } else {
  // }
  return microsoftProductsTrue;
};

// /*
//   Images
// */
// export const getProductImageIds = async (): Promise<Array<string>> => {
//   const files = await readdir(`productImage`);
//   return files.map((value) => value.replace(`.jpeg`, ``));
// };
