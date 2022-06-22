import { scrapeProductsFromMegaList } from "../scrape/scrapeProductsFromMegaList";

/*
  Scrapes all products, regardless of whether they have been scraped.
*/
const execute = async () => {
  console.log(`Gonna scrape all products from MegaList.json`);
  await scrapeProductsFromMegaList({ soft: false });
};

execute();
