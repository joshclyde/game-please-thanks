import { appendProductIdsToMegaList } from "../utils";
import { getNewBundleProductIds } from "../utils/scraping/getNewBundleProductIds";
import { scrapeGamePassProductIds } from "../utils/scraping/scrapeGamePassProductIds";
import { scrapeMainProductIds } from "../utils/scraping/scrapeMainProductIds";
import { scrapeMicrosoftProductsFromMegaList } from "../utils/scraping/scrapeMicrosoftProductsFromMegaList";

/*
  Before executing make
  - /data
  - /data/rawProduct
    - /data/megaList.json with { "productIds": [] }

  This script
  - scrapes a bunch of microsoft data and saves just the product Ids to `megaList.json`
*/
const execute = async () => {
  console.log(`Scraping main product ids.`);
  await appendProductIdsToMegaList(await scrapeMainProductIds());

  console.log(`Scraping game pass product ids.`);
  await appendProductIdsToMegaList(await scrapeGamePassProductIds());
  await scrapeMicrosoftProductsFromMegaList({ soft: false });

  let newIds = await getNewBundleProductIds();
  while (newIds.length > 0) {
    console.log(`Scraping bundle product ids.`);
    await appendProductIdsToMegaList(newIds);
    await scrapeMicrosoftProductsFromMegaList({ soft: true });
    newIds = await getNewBundleProductIds();
  }
};

execute();
