import axios, { AxiosError } from "axios";
// eslint-disable-next-line
import puppeteer from "puppeteer";
import { writeResponseToFiles, appendProductIdsToMegaList } from "../";
import { RecoPublicResponse } from "../../types";

const executeOld = async () => {
  // Navigating to all games page
  console.log(`Navigating to "All Games" page.`);
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--disable-setuid-sandbox`],
    ignoreHTTPSErrors: true,
  });
  const page = (await browser.pages())[0];
  await page.goto(`https://www.xbox.com/en-US/games/all-games`);

  // https://reco-public.rec.mp.microsoft.com/channels/Reco/V8.0/Lists/Computed/TopPaid?Market=us&Language=en&ItemTypes=Game&deviceFamily=Windows.Xbox&count=2000
  // https://reco-public.rec.mp.microsoft.com/channels/Reco/V8.0/Lists/Computed/TopFree?Market=us&Language=en&ItemTypes=Game&deviceFamily=Windows.Xbox&count=2000
  // https://reco-public.rec.mp.microsoft.com/channels/Reco/V8.0/Lists/Computed/New?Market=us&Language=en&ItemTypes=Game&deviceFamily=Windows.Xbox&count=2000

  // Set up network request interception.
  page.on(`response`, async (response) => {
    if (
      response.url().startsWith(`https://displaycatalog.mp.microsoft.com/v7.0/products`)
    ) {
      const json = await response.json();
      await writeResponseToFiles(json);
    }
  });

  // Ensure entries load?
  await page.waitForSelector(`div[data-bigid]`);

  await browser.close();
};

// Max of 200 at a time
const makeUrl = (category: string, count: number, skipItems: number) =>
  `https://reco-public.rec.mp.microsoft.com/channels/Reco/V8.0/Lists/Computed/${category}?Market=us&Language=en&ItemTypes=Game&deviceFamily=Windows.Xbox&count=${count}&skipitems=${skipItems}`;

const scrapeRecoPublicData = async (
  category: string,
  count: number,
  skipItems: number,
) => {
  const response = await axios.get<RecoPublicResponse>(
    makeUrl(category, count, skipItems),
  );
  const productIds = response.data.Items.map((item) => item.Id);

  if (skipItems + count < response.data.PagingInfo.TotalItems) {
    const moreProductIds = await scrapeRecoPublicData(category, count, skipItems + count);
    return [...productIds, ...moreProductIds];
  }
  return productIds;
};

export const scrapeMainProductIds = async () => {
  return [
    ...(await scrapeRecoPublicData(`TopPaid`, 200, 0)),
    ...(await scrapeRecoPublicData(`TopFree`, 200, 0)),
    ...(await scrapeRecoPublicData(`New`, 200, 0)),
    ...(await scrapeRecoPublicData(`BestRated`, 200, 0)),
    ...(await scrapeRecoPublicData(`ComingSoon`, 200, 0)),
    ...(await scrapeRecoPublicData(`Deal`, 200, 0)),
  ];
};
