import Jimp from "jimp";

import { ColorGrid } from "../../types";

import { algorithm4 } from "./algorithm4";

let algorithm = algorithm4;

export const createImage = async (inputPath: string, outputPath: string) => {
  const image = await Jimp.read(inputPath);
  image.resize(64, 64);
  const colors = algorithm(ColorGrid.fromImage(image));
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    this.bitmap.data[idx + 0] = colors.grid[x][y].red;
    this.bitmap.data[idx + 1] = colors.grid[x][y].green;
    this.bitmap.data[idx + 2] = colors.grid[x][y].blue;
  });
  image.write(outputPath);
};

export const createProductImage = async (productId: string) => {
  await createImage(
    `./scripts/data/productImage/${productId}.jpeg`,
    `./scripts/data/gameImage/${productId}.jpeg`,
  );
};
