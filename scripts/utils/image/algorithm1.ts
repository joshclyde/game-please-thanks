import { Color, ColorGrid } from "../../types";

// Reduce colors to most popular.
const limitColors = (colors: ColorGrid, numOfColors: number) => {
  return colors.transformCloset(
    colors.colorCounts
      .slice(0, numOfColors)
      .map(([colorString]) => Color.fromStringify(colorString)),
  );
};

/*
  Rounds colors to reduce the number of colors in the image,
  then limit to just the top 6 of those rounded colors.

  Pros
  - Allowing 6 colors makes some pics more fun.
  Cons
  - Doing the straight up most popular colors makes some look a bit odd. (minecrat + chicken horse)
*/
export const algorithm1 = (colors: ColorGrid): ColorGrid => {
  return limitColors(colors.transformRounded(3), 6);
};
