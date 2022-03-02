import {
  appendProductIdsToMegaList,
  getBundleProductIds,
  getIsBundle,
  readAllMicrosoftProductData,
  readMegaList,
} from "../";

export const getNewBundleProductIds = async () => {
  const megaList = await readMegaList();
  const products = await readAllMicrosoftProductData();
  let newProductIds: Array<string> = [];
  for (const microsoftProduct of Object.values(products)) {
    if (getIsBundle(microsoftProduct)) {
      const bundleProductIds = getBundleProductIds(microsoftProduct);
      const bundleProductIdsToRequest = bundleProductIds.filter(
        (id) => !megaList.productIds.includes(id) && !newProductIds.includes(id),
      );
      newProductIds.push(...bundleProductIdsToRequest);
    }
  }
  return newProductIds;
};
