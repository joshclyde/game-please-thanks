import { scrapeProductsFromBundledProducts } from "../scrape/scrapeProductsFromBundledProducts";

const execute = async () => {
  await scrapeProductsFromBundledProducts();
};

execute();
