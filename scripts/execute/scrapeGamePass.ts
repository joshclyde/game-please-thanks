import { scrapeProductIdsFromGamePass } from "../scrape/scrapeProductIdsFromGamePass";

const execute = async () => {
  await scrapeProductIdsFromGamePass();
};

execute();
