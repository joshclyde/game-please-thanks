/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-namespace */

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onSchedule } from "firebase-functions/v2/scheduler";

import { scrapeProductIdsFromGamePass } from "./scrape/scrapeProductIdsFromGamePass";
import { scrapeProductIdsFromRecoPublic } from "./scrape/scrapeProductIdsFromRecoPublic";
import { scrapeProductsFromBundledProducts } from "./scrape/scrapeProductsFromBundledProducts";
import { scrapeProductsFromMegaList } from "./scrape/scrapeProductsFromMegaList";
import { getGamePassProductIds } from "./utils/database";
import { logger } from "./utils/log";
import { writeGamesToFirestore } from "./writeGamesToFirestore";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
// const { initializeApp } = require(`firebase-admin/app`);

// const { logger } = require(`firebase-functions`);
// const { onDocumentCreated } = require(`firebase-functions/v2/firestore`);
// const { onRequest } = require(`firebase-functions/v2/https`);

// The Firebase Admin SDK to access Firestore.
// const { getFirestore } = require(`firebase-admin/firestore`);

initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.scrapeAndUpdateEverything = onSchedule(`0 * * * *`, async () => {
  logger.log(`Starting scrapeAndUpdateEverything.`);

  /*
    2 things
    - want to save the game pass ids somewhere so I know which ids are game pass
    - want to use these ids to do the cycle of stuff
  */

  logger.log(`Start scraping game pass.`);
  await scrapeProductIdsFromGamePass();
  logger.log(`Finished scraping game pass.`);

  logger.log(`Start setting game pass to firestore.`);
  const firestore = getFirestore();
  firestore.settings({ ignoreUndefinedProperties: true });
  logger.log(`Initialized firestore.`);

  await firestore
    .collection(`gamePass`)
    .doc(`games`)
    .set({ ids: getGamePassProductIds() });
  logger.log(`Finished setting game pass to firestore.`);

  logger.log(`Start scraping from reco public`);
  await scrapeProductIdsFromRecoPublic();
  logger.log(`Finished scraping from reco public.`);

  // TODO: Figure out scraping from store search. Throwing an error right now.
  // logger.log(`Start scraping from store search`);
  // await scrapeProductIdsFromStoreSearch();
  // logger.log(`Finished scraping from store search.`);

  logger.log(`Start scraping all mega list products.`);
  await scrapeProductsFromMegaList({ soft: false });
  logger.log(`Finished scraping all mega list products.`);

  logger.log(`Start scraping bundles.`);
  await scrapeProductsFromBundledProducts();
  logger.log(`Finished scraping bundles.`);

  await writeGamesToFirestore();

  logger.log(`I successfuly saved everything.`);
});
