/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-namespace */

import { getFirestore } from "firebase-admin/firestore";

import { Game, MicrosoftProduct } from "./types";
import {
  getGamePassProductIds,
  getMegaList,
  getMicrosoftProducts,
} from "./utils/database";
import { logger } from "./utils/log";
import {
  convertProductToGame,
  getIsBundle,
  getProductType,
  getIsDemo,
} from "./utils/product";

const isProductAGame = (product: MicrosoftProduct) =>
  !getIsBundle(product) && getProductType(product) === `Game` && !getIsDemo(product);

export const writeGamesToFirestore = async () => {
  logger.log(`Start setting all games to firestore.`);
  const products = getMicrosoftProducts();
  const gamePassProductIds = getGamePassProductIds();
  const megaList = getMegaList();
  logger.log(`products length: ${Object.keys(products).length}`);
  logger.log(`megaList length: ${megaList.length}`);
  // const pages = await ProductPage.all();

  const games: Record<string, Game> = {};
  Object.keys(products).forEach((productId) => {
    const product = products[productId];
    /*
      Filter only products that are a game.
    */
    if (isProductAGame(product)) {
      const game = convertProductToGame(
        product,
        gamePassProductIds.includes(productId),
        // pages[productId],
      );

      games[game.id] = game;
    }
  });

  const firestore = getFirestore();
  await Promise.all(
    Object.entries(games).map(async ([key, value]) => {
      // For some reason, none of these logs are being logged? But the logs earlier
      // in writeGameToFirestore are being logged.
      logger.log(`Trying ${key}`);
      try {
        await firestore.collection(`games`).doc(key).set(value);
      } catch (e) {
        logger.log(`Error creating (or updating) ${key}`);
      }
    }),
  );
  // await Promise.all(Object.entries(games).map((data) => collection.add(data)));

  // let promises: Array<() => Promise<void>> = [];

  // Object.entries(games).forEach(([key, value]) =>
  //   promises.push(async () => {
  //     await firestore.collection(`games`).doc(key).set(value);
  //   }),
  // );

  // await execConcurrentPromises(promises, 10);

  // const writeBatch = firestore.batch();
  // Object.entries(games).forEach(([key, value]) =>
  //   writeBatch.set(firestore.collection(`games`).doc(key), value),
  // );

  // await writeBatch.commit();
  logger.log(`Finished setting all games to firestore.`);
};
