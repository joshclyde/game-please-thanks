import { Color, ColorGrid } from "../../types";

/*
  Reduce the colors to the most popular colors, but ensure that
  the colors chosen are different enough that the image will
  look better.
*/
const limitColors = (colors: ColorGrid, numOfColors: number) => {
  const { colorCounts } = colors;
  let colorPool: Array<Color> = [];
  let i = 0;
  while (colorPool.length < numOfColors) {
    const color = Color.fromStringify(colorCounts[i][0]);
    if (!colorPool.some((x) => x.lengthBetween(color) < 100)) {
      colorPool.push(color);
    }
    i++;
  }
  return colors.transformCloset(colorPool);
};

/*
  So far this is my top pick!

  Pros
    - The colors seem diverse.
    - Small amount of colors.
  Cons
    - The best color is not always picked out (not neccesarily bad since it gives it that not perfect style)
*/
export const algorithm2 = (colors: ColorGrid): ColorGrid => {
  return limitColors(colors.transformRounded(6), 6);
};
