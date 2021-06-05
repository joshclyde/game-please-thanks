// eslint-disable-next-line
import puppeteer from "puppeteer";

import { writeResponseToFiles } from "../utils";

const execute = async () => {
  // Navigating to all games page
  console.log(`Navigating to "All Games" page.`);
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--disable-setuid-sandbox`],
    ignoreHTTPSErrors: true,
  });
  const page = (await browser.pages())[0];
  await page.goto(`https://www.xbox.com/en-US/games/all-games`);

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

execute();
