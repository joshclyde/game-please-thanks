import axios, { AxiosError } from "axios";

import { MicrosoftProduct } from "../types";
import {
  onEachRawProductData,
  getAllMicrosoftProductIds,
  getIsBundle,
  getBundleProductIds,
  readAllMicrosoftProductData,
  writeResponseToFiles,
} from "../utils";

/*
  https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=BRPVTJKWHBR7,BSN8BS8F8BBJ&market=US&languages=en-us&MS-CV=DGU1mcuYo0WMMp
*/

let productIdsToRequest: Array<string> = [];

const scrapeMicrosoftProducts = async (productIds: Array<string>) => {
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

const execute = async () => {
  const products = await readAllMicrosoftProductData();
  const productIds = Object.keys(products);
  console.log(Object.keys(productIds).length);
  productIds.forEach((id) => {
    const microsoftProduct = products[id];
    if (getIsBundle(microsoftProduct)) {
      const bundleProductIds = getBundleProductIds(microsoftProduct);
      const bundleProductIdsToRequest = bundleProductIds.filter(
        (id) => !productIds.includes(id) && !productIdsToRequest.includes(id),
      );
      productIdsToRequest.push(...bundleProductIdsToRequest);
    }
  });
  console.log(Object.keys(productIdsToRequest).length);
  // let promises: Array<Promise<void>> = [];
  // for (let i = 0; i < productIds.length; i += 20) {
  //   promises.push(
  //     scrapeMicrosoftProducts(
  //       productIdsToRequest.slice(0 + i, Math.min(20 + i, productIdsToRequest.length)),
  //     ),
  //   );
  // }
  // await Promise.all(promises);
};

execute();
