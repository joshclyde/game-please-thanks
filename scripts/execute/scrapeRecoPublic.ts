import { scrapeProductIdsFromRecoPublic } from "../scrape/scrapeProductIdsFromRecoPublic";

const execute = async () => {
  await scrapeProductIdsFromRecoPublic();
};

execute();
