import { Color, ColorGrid } from "./types";
import {
  createColorCountsArray,
  createNewColorGrid,
  roundColor,
  parseColorString,
  forEachColor,
  addColor,
  closestColor,
} from "./utils";

// Reduce colors to most popular.
const limitColors = (colorGrid: ColorGrid, numOfColors: number) => {
  const colorCounts = createColorCountsArray(colorGrid);
  const validColors = colorCounts.slice(0, numOfColors).map<Color>(([key]) => {
    return parseColorString(key);
  });

  const newColorGrid: ColorGrid = {};
  forEachColor(colorGrid, (color, x, y) => {
    addColor(newColorGrid, closestColor(color, validColors), x, y);
  });
  return newColorGrid;
};

/*
  Rounds colors to reduce the number of colors in the image,
  then limit to just the top 6 of those rounded colors.

  Pros
  - Allowing 6 colors makes some pics more fun.
  Cons
  - Doing the straight up most popular colors makes some look a bit odd. (minecrat + chicken horse)
*/
export const algorithm1 = (colorGrid: ColorGrid): ColorGrid => {
  return limitColors(
    createNewColorGrid(colorGrid, (color) => roundColor(color, 3)),
    6,
  );
};
