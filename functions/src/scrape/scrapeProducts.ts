/* eslint-disable import/no-commonjs */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-namespace */

// import { log } from "firebase-functions/logger";

import { MicrosoftProduct } from "../types";
import { setProduct } from "../utils/database";
import { execConcurrentPromises } from "../utils/execConcurrentPromises";

const _scrapeProducts = async (productIds: Array<string>) => {
  if (productIds.length > 20) {
    throw new Error(
      `The number of productIds exceeded the max number (20) you should request at one time.`,
    );
  }

  try {
    const { Products: products } = (await (
      await fetch(
        `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${productIds.join()}&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp`,
      )
    ).json()) as { Products: Array<MicrosoftProduct> };

    for (const product of products) {
      setProduct(product);
      // log(`SUCCESS: ${product.ProductId}`))
      // console.log(`SUCCESS: ${product.ProductId}`);
    }
  } catch (error) {
    let errorMessage = `Failed to get product data for some product ids`;
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(`ERROR: ${productIds}\n\n${errorMessage}\n\n`);
  }
};

export const scrapeProducts = async (productIds: Array<string>) => {
  let promises: Array<() => Promise<void>> = [];
  for (let i = 0; i < productIds.length; i += 20) {
    promises.push(() =>
      _scrapeProducts(productIds.slice(0 + i, Math.min(20 + i, productIds.length))),
    );
  }
  await execConcurrentPromises(promises, 10);
};
