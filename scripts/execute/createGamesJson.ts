import { Game } from "../types";
import {
  getGamePassProductIds,
  getMicrosoftProducts,
  setGame,
  setGames,
} from "../utils/database";
import {
  convertMicrosoftProductToGame,
  getIsBundle,
  getProductType,
} from "../utils/product";

/*
  Loop through all products
*/
const execute = async () => {
  const products = await getMicrosoftProducts();
  const { productIds: gamePassProductIds } = await getGamePassProductIds();

  const games: Record<string, Game> = {};
  Object.keys(products).forEach((id) => {
    const product = products[id];
    /*
      Filter only products that are a game.
    */
    if (!getIsBundle(product) && getProductType(product) === `Game`) {
      const game = convertMicrosoftProductToGame(
        product,
        gamePassProductIds.includes(id),
      );
      setGame(game);
      games[game.id] = game;
    }
  });
  await setGames(games);
};

execute();
