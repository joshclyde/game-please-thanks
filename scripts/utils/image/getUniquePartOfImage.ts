import Jimp from "jimp";

import { ColorGrid, Color } from "../../types";

/*
  Theoretically, removes any pixels from image1 that are the same as image2.

  However, when I started using this I realized that the images I were getting
  were not quite aligned the same so it wasn't going to work.
*/
export const getUniquePartOfImage = (image1: Jimp, image2: Jimp): Jimp => {
  const colors1 = ColorGrid.fromImage(image1);
  const colors2 = ColorGrid.fromImage(image2);
  return colors1.transform((color, x, y) => {
    if (color.isEqual(colors2.grid[x][y])) {
      return new Color(0, 0, 0, 0);
    }
    return color;
  }).image;
};
