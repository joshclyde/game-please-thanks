import { scrapeProductIdsFromStoreSearch } from "../scrape/scrapeProductIdsFromStoreSearch";

const execute = async () => {
  await scrapeProductIdsFromStoreSearch();
};

execute();
