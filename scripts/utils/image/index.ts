import { read } from "jimp";

import { algorithm4 } from "./algorithm4";
import { ColorGrid } from "./types";
import { addColor } from "./utils";

let algorithm = algorithm4;

export const createImage = async (inputPath: string, outputPath: string) => {
  const image = await read(inputPath);
  image.resize(64, 64);

  const productColorGrid: ColorGrid = {};
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    addColor(
      productColorGrid,
      {
        red: this.bitmap.data[idx + 0],
        green: this.bitmap.data[idx + 1],
        blue: this.bitmap.data[idx + 2],
      },
      x,
      y,
    );
  });

  const newColorGrid = algorithm(productColorGrid);
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    this.bitmap.data[idx + 0] = newColorGrid[x][y].red;
    this.bitmap.data[idx + 1] = newColorGrid[x][y].green;
    this.bitmap.data[idx + 2] = newColorGrid[x][y].blue;
  });
  image.write(outputPath);
};

export const createProductImage = async (productId: string) => {
  await createImage(
    `./scripts/data/productImage/${productId}.jpeg`,
    `./scripts/data/gameImage/${productId}.jpeg`,
  );
};
