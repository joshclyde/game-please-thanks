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

const getMostPopularColors = (colorGrid: ColorGrid, numOfColors: number) => {
  const colorCounts = createColorCountsArray(colorGrid);
  let colors: Array<Color> = [];
  let i = 0;
  while (colors.length < numOfColors && i < colorCounts.length) {
    const color = parseColorString(colorCounts[i][0]);
    let shouldAdd = true;
    colors.forEach((validColor) => {
      const length = lengthBetweenColors(color, validColor);
      if (length < 100) {
        shouldAdd = false;
      }
    });
    if (shouldAdd) {
      colors.push(color);
    }
    i++;
  }

  if (colors.length != numOfColors) {
    let j = 0;
    while (colors.length < numOfColors) {
      const color = parseColorString(colorCounts[j][0]);
      let shouldAdd = true;
      colors.forEach((validColor) => {
        if (color === validColor) {
          shouldAdd = false;
        }
      });
      if (shouldAdd) {
        colors.push(color);
      }
      j++;
    }
  }

  return colors;
};

const addLightAndDarkColors = (colors: Array<Color>): Array<Color> => {
  const newColors = [...colors];
  colors.forEach((color) => {
    newColors.push({
      red: color.red * 0.7,
      green: color.green * 0.7,
      blue: color.blue * 0.7,
    });
  });
  return newColors;
};

export const algorithm4 = (colorGrid: ColorGrid): ColorGrid => {
  // return createNewColorGridClosestColor(
  //   colorGrid,
  //   addLightAndDarkColors(getMostPopularColors(colorGrid, 6)),
  // );

  // return createNewColorGrid(colorGrid, (color) => roundColor(color, 6));
  return createNewColorGridClosestColor(
    colorGrid,
    addLightAndDarkColors(getMostPopularColors(colorGrid, 6)),
  );
};
