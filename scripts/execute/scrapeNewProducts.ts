import { scrapeProductsFromMegaList } from "../scrape/scrapeProductsFromMegaList";

const execute = async () => {
  console.log(`Gonna scrape only products from MegaList.json that don't have their data`);
  await scrapeProductsFromMegaList({ soft: true });
};

execute();
