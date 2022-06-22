import axios from "axios";

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
    const {
      data: { Products: products },
    } = await axios.get<{ Products: Array<MicrosoftProduct> }>(
      `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${productIds.join()}&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp`,
    );
    for (const product of products) {
      await setProduct(product);
      console.log(`SUCCESS: ${product.ProductId}`);
    }
  } catch (error) {
    console.log(`ERROR: ${productIds}\n\n${error.data}\n\n`);
  }
};

export const scrapeProducts = async (productIds: Array<string>) => {
  let promises: Array<() => Promise<void>> = [];
  for (let i = 0; i < productIds.length; i += 20) {
    promises.push(() =>
      _scrapeProducts(productIds.slice(0 + i, Math.min(20 + i, productIds.length))),
    );
  }
  execConcurrentPromises(promises, 10);
};
