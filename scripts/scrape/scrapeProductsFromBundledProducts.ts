import { getMegaList, addToMegaList, getMicrosoftProducts } from "../utils/database";
import { getIsBundle, getBundleProductIds } from "../utils/product";

import { scrapeProductsFromMegaList } from "./scrapeProductsFromMegaList";

/*
  Returns product IDs that are not in MegaList.json but are found in a MicrosoftProduct
  that is a bundle and references other products
*/
const getNewProductIdsFromBundles = async () => {
  const { productIds: megaListProductIds } = await getMegaList();
  const microsoftProducts = await getMicrosoftProducts();

  let newProductIdsFromBundles: Array<string> = [];
  for (const microsoftProduct of Object.values(microsoftProducts)) {
    if (getIsBundle(microsoftProduct)) {
      newProductIdsFromBundles.push(
        ...getBundleProductIds(microsoftProduct).filter(
          (id) =>
            !megaListProductIds.includes(id) && !newProductIdsFromBundles.includes(id),
        ),
      );
    }
  }
  return newProductIdsFromBundles;
};

export const scrapeProductsFromBundledProducts = async () => {
  let newIds = await getNewProductIdsFromBundles();
  while (newIds.length > 0) {
    /*
      Add the newIds to the megaList and then scrapes only
      products from the mega list that have not yet been scraped.
    */
    await addToMegaList(newIds);
    await scrapeProductsFromMegaList({ soft: true });
    newIds = await getNewProductIdsFromBundles();
  }
};
