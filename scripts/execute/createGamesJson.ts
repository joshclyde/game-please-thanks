import { Game, ProductPage } from "../types";
import {
  getGamePassProductIds,
  getMicrosoftProducts,
  setGame,
  setGames,
} from "../utils/database";
import {
  convertProductToGame,
  getIsBundle,
  getProductType,
  getIsDemo,
} from "../utils/product";

/*
  Loop through all products
*/
const execute = async () => {
  const products = await getMicrosoftProducts();
  const { productIds: gamePassProductIds } = await getGamePassProductIds();
  const pages = await ProductPage.all();

  const games: Record<string, Game> = {};
  Object.keys(products).forEach((productId) => {
    const product = products[productId];
    /*
      Filter only products that are a game.
    */
    if (
      !getIsBundle(product) &&
      getProductType(product) === `Game` &&
      !getIsDemo(product)
    ) {
      const game = convertProductToGame(
        product,
        gamePassProductIds.includes(productId),
        pages[productId],
      );

      setGame(game);
      games[game.id] = game;
    }
  });
  await setGames(games);
};

execute();
