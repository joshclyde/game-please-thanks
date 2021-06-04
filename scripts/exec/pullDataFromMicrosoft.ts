// eslint-disable-next-line
import puppeteer from "puppeteer";

import { RawProduct } from "../types";
import { writeRawProductData } from "../utils";

/*
  Takes the response from "https://displaycatalog.mp.microsoft.com/v7.0/products"
  and writes each product to a file.
*/
const writeResponseToFiles = (response: { Products: Array<RawProduct> }) => {
  return new Promise<void>((res, rej) => {
    let count = 0;
    response.Products.forEach((productData) => {
      const save = async () => {
        try {
          await writeRawProductData(productData);
        } catch (err) {
          console.log(`Error trying to save data for ${productData.ProductId}`);
        }
        count++;
        // Resolve promise when the last product has been saved.
        if (count === response.Products.length) {
          res();
        }
      };
      save();
    });
  });
};

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
