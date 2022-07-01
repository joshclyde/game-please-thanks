import axios from "axios";

import { ProductPage } from "../types";
import { getGame, setProductPage, getGames } from "../utils/database";

const _scrapeProductPage = async (productId: string) => {
  const game = await getGame(productId);
  if (!game.externalUrl) {
    console.log(`${game.name} has no external url`);
    return;
  }
  const { data } = await axios.get(game.externalUrl);
  await setProductPage(productId, data);
};

export const scrapeProductPagesByIds = async (productIds: Array<string>) => {
  let errors: Array<{ productId: string; error: any }> = [];
  let left = productIds.length;
  for (const productId of productIds) {
    try {
      await _scrapeProductPage(productId);
    } catch (e) {
      errors.push({ productId, error: e });
      console.log(`FAILED ${productId}`);
    }
    left--;
    console.log(`${left} left to scrape`);
  }

  console.log(`There were ${errors.length} errors.`);
  for (const { productId, error } of errors) {
    console.log(`Failed for ${productId}:`);
    console.log(error);
    console.log(``);
  }
};

export const scrapeProductPages = async ({ soft = true }: { soft: boolean }) => {
  const games = await getGames();
  const pages = await ProductPage.all();
  let productIds = Object.keys(games);
  if (soft) {
    /*
      Currently, if the product page does not have PAL then
      it will not be returned in pages when doing
      await ProductPage.all(). That means we will scrape it
      again even though we don't want to (when doing soft).

      TODO: fix this
    */
    productIds = productIds.filter((productId) => {
      pages[productId] && console.log(`Filtering out ${productId}`);
      return !pages[productId];
    });
  }
  await scrapeProductPagesByIds(productIds);
};
