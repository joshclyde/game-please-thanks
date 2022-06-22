import { Color, ColorGrid } from "./types";

/*
  Gets a numerical value determining the difference between
  2 colors
*/
export const lengthBetweenColors = (color1: Color, color2: Color) => {
  const one = Math.pow(color2.red - color1.red, 2);
  const two = Math.pow(color2.green - color1.green, 2);
  const three = Math.pow(color2.blue - color1.blue, 2);
  return Math.sqrt(one + two + three);
};

/*
  TODO: This is weird? Rounds a color.
*/
export const roundColor = ({ red, green, blue }: Color, num: number) => {
  const base = 255 / num;
  return {
    red: Math.round(red / base) * base,
    blue: Math.round(blue / base) * base,
    green: Math.round(green / base) * base,
  };
};

/*
  Returns the color in colors that is most similar to the color passed in
*/
export const closestColor = (color: Color, colors: Array<Color>) => {
  return colors.reduce<Color>((winnerColor, currentColor) => {
    if (
      lengthBetweenColors(winnerColor, color) > lengthBetweenColors(currentColor, color)
    ) {
      return currentColor;
    }
    return winnerColor;
  }, colors[0]);
};

/*
  Given a string of [RED],[GREEN],[BLUE], return a Color with those values
*/
export const parseColorString = (colorString: string): Color => {
  const values = colorString.split(`,`);
  return {
    red: Number(values[0]),
    green: Number(values[1]),
    blue: Number(values[2]),
  };
};

/*
  Adds a color to a ColorGrid at a specified point
*/
export const addColor = (colorGrid: ColorGrid, color: Color, x: number, y: number) => {
  if (!colorGrid[x]) {
    colorGrid[x] = {};
  }
  colorGrid[x][y] = color;
};

/*
  Return the width and height of a colorGrid
*/
export const dimensions = (colorGrid: ColorGrid): [width: number, height: number] => {
  const width = Object.keys(colorGrid).length;
  const height = Object.keys(colorGrid[0]).length;
  return [width, height];
};

/*
  Returns a partial area of a color grid,
  starting from colorGrid[x][y]
  with a width and height from the passed in params
*/
export const sliceColorGrid = (
  colorGrid: ColorGrid,
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  const colorGridSliced: ColorGrid = {};
  for (let x2 = x; x2 < x + width; x2++) {
    for (let y2 = y; y2 < y + height; y2++) {
      addColor(colorGridSliced, colorGrid[x2][y2], x2, y2);
    }
  }
  return colorGridSliced;
};

/*
  For each color in a colorGrid,
  will execute the function passed in
*/
export const forEachColor = (
  colorGrid: ColorGrid,
  exec: (color: Color, x: number, y: number) => void,
) => {
  Object.keys(colorGrid).forEach((x) => {
    Object.keys(colorGrid[x]).forEach((y) => {
      exec(colorGrid[x][y], Number(x), Number(y));
    });
  });
};

/*
  Given a colorGrid and a createNewColor function,
  return a new ColorGrid where the colors are created
  by running the createNewColor function on every color
  from the colorGrid passed in
*/
export const createNewColorGrid = (
  colorGrid: ColorGrid,
  createNewColor: (color: Color, x: number, y: number) => Color,
) => {
  const newColorGrid: ColorGrid = {};
  forEachColor(colorGrid, (color, x, y) =>
    addColor(newColorGrid, createNewColor(color, x, y), x, y),
  );
  return newColorGrid;
};

/*
  Given a ColorGrid, return a map keyed by color with a value
  of the number of times the color occurs in the ColorGrid
*/
export const createColorCounts = (colorGrid: ColorGrid): Record<string, number> => {
  const colorCounts: Record<string, number> = {};
  forEachColor(colorGrid, ({ red, green, blue }) => {
    const current = colorCounts[`${red},${green},${blue}`] || 0;
    colorCounts[`${red},${green},${blue}`] = current + 1;
  });
  return colorCounts;
};

/*
  Given a ColorGrid, return an array where each value is a color with a value
  of the number of times the color occurs in the ColorGrid
*/
export const createColorCountsArray = (colorGrid: ColorGrid) => {
  return Object.entries(createColorCounts(colorGrid)).sort(
    ([_key1, value1], [_key2, value2]) => value2 - value1,
  );
};

/*
  Creates a new color grid where each color is changed
  to the closet color in colors
*/
export const createNewColorGridClosestColor = (
  colorGrid: ColorGrid,
  colors: Array<Color>,
) => {
  return createNewColorGrid(colorGrid, (color) => {
    return closestColor(color, colors);
  });
};
