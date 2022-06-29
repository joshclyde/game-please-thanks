import { Color, ColorGrid } from "../../types";

const getMostPopularColors = (colors: ColorGrid, numOfColors: number): Array<Color> => {
  const { colorCounts } = colors;
  let colorPool: Array<Color> = [];
  let i = 0;
  while (colorPool.length < numOfColors && i < colorCounts.length) {
    const color = Color.fromStringify(colorCounts[i][0]);
    if (!colorPool.some((x) => x.lengthBetween(color) < 100)) {
      colorPool.push(color);
    }
    i++;
  }

  i = 0;
  while (colorPool.length < numOfColors) {
    const color = Color.fromStringify(colorCounts[i][0]);
    if (!colorPool.some((x) => x.isEqual(color))) {
      colorPool.push(color);
    }
    i++;
  }

  return colorPool;
};

const getDarkColors = (colors: Array<Color>): Array<Color> => {
  const newColors = [...colors];
  colors.forEach((color) => {
    newColors.push(
      new Color(color.red * 0.7, color.green * 0.7, color.blue * 0.7, color.alpha * 0.7),
    );
  });
  return newColors;
};

export const algorithm4 = (colors: ColorGrid): ColorGrid => {
  return colors.transformCloset(getDarkColors(getMostPopularColors(colors, 6)));
};
