import { read } from "jimp";

import { Game } from "../types";
import { readGamesFile, doesMicrosoftImageExist } from "../utils";

const downloadMicrosoftImage = async (game: Game) => {
  // const doesExist = await doesMicrosoftImageExist(game);
  // if (doesExist) {
  //   return;
  // }
  const imageUrl = game.images.UntitledSquare.url;
  if (imageUrl && imageUrl.length > 12) {
    try {
      const image = await read(imageUrl);
      console.log(`Successful request for image ${imageUrl}`);
      image.write(`./scripts/data/images/microsoftImages/${game.id}.jpeg`);
    } catch (error) {
      console.log(`Failure requesting image ${imageUrl} for ${game.name}.`);
    }
  } else {
    console.log(`Bad imageUrl for ${game.name}`);
  }
};

const execConcurrentPromises = async (
  promises: Array<() => Promise<void>>,
  concurrency,
) => {
  let index = 0;
  const another = async () => {
    const i = index;
    index++;
    await promises[i]();
    await another();
  };
  for (let i = 0; i < concurrency; i++) {
    another();
  }
};

const execute = async () => {
  const games = await readGamesFile();
  const promises: Array<() => Promise<void>> = [];
  Object.keys(games).forEach((key) => {
    promises.push(async () => {
      const game = games[key];
      await downloadMicrosoftImage(game);
    });
  });

  execConcurrentPromises(promises, 10);

  // Object.keys(games)
  //   .slice(0, 30)
  //   .forEach((key) => {
  //     const game = games[key];
  //     console.log(game);
  //     downloadMicrosoftImage(game);
  //   });
  // downloadMicrosoftImage(games[`C1C4DZJPBC2V`]);
  // downloadMicrosoftImage(games[`C2MHS238PDNS`]);
  // downloadMicrosoftImage(games[`C125W9BG2K0V`]);
  // downloadMicrosoftImage(games[`BQ7NMRJT1NQ4`]);
  // downloadMicrosoftImage(games[`BPJ686W6S0NH`]);
  // downloadMicrosoftImage(games[`9P2N57MC619K`]);
  // downloadMicrosoftImage(games[`9NBLGGH537BL`]);
  // downloadMicrosoftImage(games[`BNNMLWZRNQF6`]);
};

execute();
