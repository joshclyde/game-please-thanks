import { Color, ColorGrid } from "./types";
import {
  createColorCountsArray,
  createNewColorGrid,
  roundColor,
  parseColorString,
  forEachColor,
  createNewColorGridClosestColor,
  addColor,
  closestColor,
  lengthBetweenColors,
} from "./utils";

// Reduce colors to a light, medium, and dark color.
const limitColors = (colorGrid: ColorGrid, numOfColors: number) => {
  const colorCounts = createColorCountsArray(colorGrid);
  let light: Color | null = null;
  let medium: Color | null = null;
  let medium2: Color | null = null;
  let medium3: Color | null = null;
  let dark: Color | null = null;

  let i = 0;
  while (!(light && medium && medium2 && medium3 && dark) && i < colorCounts.length) {
    const [colorString] = colorCounts[i];
    const color = parseColorString(colorString);
    // const darkLength = lengthBetweenColors(color, { red: 0, green: 0, blue: 0 });
    // const lightLength = lengthBetweenColors(color, { red: 255, green: 255, blue: 255 });
    // if (!dark && darkLength < 100) {
    //   dark = color;
    // } else if (!light && lightLength < 50) {
    //   light = color;
    const lightness = (((color.red + color.green + color.blue) / 3) * 100) / 255;
    const diff1 = Math.abs(color.red - color.green);
    const diff2 = Math.abs(color.red - color.blue);
    const diff3 = Math.abs(color.green - color.blue);
    const greyness = Math.max(diff1, diff2, diff3);
    if (!dark && lightness < 20) {
      dark = color;
    } else if (!light && lightness > 90) {
      light = color;
    } else if (!medium && lightness > 20 && lightness < 90 && greyness > 100) {
      medium = color;
    } else if (!medium2 && lightness > 20 && lightness < 90 && greyness > 50) {
      medium2 = color;
    } else if (!medium3 && lightness > 20 && lightness < 90 && greyness > 50) {
      medium3 = color;
    }
    i++;
  }

  return createNewColorGridClosestColor(
    colorGrid,
    [light, medium, medium2, medium3, dark].filter((x) => x),
  );
};

export const algorithm3 = (colorGrid: ColorGrid): ColorGrid => {
  return limitColors(
    createNewColorGrid(colorGrid, (color) => roundColor(color, 6)),
    6,
  );
};
