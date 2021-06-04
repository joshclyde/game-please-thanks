import { MicrosoftProduct, Game } from "../types";
import {
  readAllMicrosoftProductData,
  getIsBundle,
  getProductType,
  convertMicrosoftProductToGame,
  writeGameToFile,
  writeGamesToFile,
} from "../utils";

/*
  Loop through all products
*/
const execute = async () => {
  const products = await readAllMicrosoftProductData();
  const games: Record<string, Game> = {};
  Object.keys(products).forEach((id) => {
    const product = products[id];
    if (!getIsBundle(product) && getProductType(product) === `Game`) {
      const game = convertMicrosoftProductToGame(product);
      writeGameToFile(game);
      games[game.id] = game;
    }
  });
  await writeGamesToFile(games);
  console.log(`Games: ${Object.keys(games).length}`);
};

execute();
