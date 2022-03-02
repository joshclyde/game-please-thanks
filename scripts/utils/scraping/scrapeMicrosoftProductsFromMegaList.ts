import axios, { AxiosError } from "axios";

import {
  writeGamePassResponseToFile,
  appendProductIdsToMegaList,
  scrapeMicrosoftProducts,
  readMegaList,
  getAllMicrosoftProductIds,
} from "../";
import { GamePassResponse } from "../../types";

interface Options {
  soft: boolean;
}

/*
  TODO: get `scrape` utils consistent. this scrape will actually download download while some others will not
  soft - if `true` will only scrape for product data that does not have existing data.
*/
export const scrapeMicrosoftProductsFromMegaList = async ({ soft }: Options) => {
  const { productIds } = await readMegaList();

  if (!soft) {
    await scrapeMicrosoftProducts(productIds);
  } else {
    const existingProductIds = await getAllMicrosoftProductIds();
    await scrapeMicrosoftProducts(
      productIds.filter((id) => !existingProductIds.includes(id)),
    );
  }
};
