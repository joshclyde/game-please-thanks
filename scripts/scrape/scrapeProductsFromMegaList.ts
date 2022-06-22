import { getMegaList, getMicrosoftProductIds } from "../utils/database";

import { scrapeProducts } from "./scrapeProducts";

interface Options {
  soft: boolean;
}

/*
  TODO: get `scrape` utils consistent. this scrape will actually download download while some others will not
  soft - if `true` will only scrape for product data that does not have existing data.
*/
export const scrapeProductsFromMegaList = async ({ soft }: Options) => {
  const { productIds: megaListProductIds } = await getMegaList();

  if (!soft) {
    await scrapeProducts(megaListProductIds);
  } else {
    const productIdsThatAlreadyHaveData = await getMicrosoftProductIds();
    await scrapeProducts(
      megaListProductIds.filter((id) => !productIdsThatAlreadyHaveData.includes(id)),
    );
  }
};
