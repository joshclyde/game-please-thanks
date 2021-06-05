import { Game } from "../types";
import {
  readAllMicrosoftProductData,
  getIsBundle,
  getProductType,
  convertMicrosoftProductToGame,
  writeGameToFile,
  writeGamesToFile,
  readAllGamePassIds,
} from "../utils";

/*
  Loop through all products
*/
const execute = async () => {
  const products = await readAllMicrosoftProductData();
  const gamePassGames = await readAllGamePassIds();
  const games: Record<string, Game> = {};
  Object.keys(products).forEach((id) => {
    const product = products[id];
    if (!getIsBundle(product) && getProductType(product) === `Game`) {
      const game = convertMicrosoftProductToGame(product, gamePassGames.includes(id));
      writeGameToFile(game);
      games[game.id] = game;
    }
  });
  await writeGamesToFile(games);
  console.log(`Games: ${Object.keys(games).length}`);
};

execute();
