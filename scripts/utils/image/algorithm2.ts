import { Color, ColorGrid } from "./types";
import {
  createColorCountsArray,
  createNewColorGrid,
  roundColor,
  parseColorString,
  forEachColor,
  addColor,
  createNewColorGridClosestColor,
  closestColor,
  lengthBetweenColors,
} from "./utils";

/*
  Reduce the colors to the most popular colors, but ensure that
  the colors chosen are different enough that the image will
  look better.
*/
const limitColors = (colorGrid: ColorGrid, numOfColors: number) => {
  const colorCounts = createColorCountsArray(colorGrid);
  let validColors: Array<Color> = [];
  let i = 0;
  while (validColors.length < numOfColors) {
    const color = parseColorString(colorCounts[i][0]);
    let shouldAdd = true;
    validColors.forEach((validColor) => {
      const length = lengthBetweenColors(color, validColor);
      if (length < 100) {
        shouldAdd = false;
      }
    });
    if (shouldAdd) {
      validColors.push(color);
    }
    i++;
  }

  return createNewColorGridClosestColor(colorGrid, validColors);
};

/*
  So far this is my top pick!

  Pros
    - The colors seem diverse.
    - Small amount of colors.
  Cons
    - The best color is not always picked out (not neccesarily bad since it gives it that not perfect style)
*/
export const algorithm2 = (colorGrid: ColorGrid): ColorGrid => {
  return limitColors(
    createNewColorGrid(colorGrid, (color) => roundColor(color, 6)),
    6,
  );
};
