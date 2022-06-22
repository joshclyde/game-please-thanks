import { getProductImage } from "../database";

import { algorithm4 } from "./algorithm4";
import { ColorGrid } from "./types";
import { addColor } from "./utils";

let algorithm = algorithm4;

export const createImage = async (productId: string) => {
  const image = await getProductImage(productId);
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
  image.write(`./scripts/data/gameImage/${productId}.jpeg`);
};
