import { Color, ColorGrid } from "../../types";

/*
  Reduce colors to a light, 3 medium and a dark color
*/
const limitColors = (colors: ColorGrid) => {
  const { colorCounts } = colors;

  let light: Color | null = null;
  let medium: Color | null = null;
  let medium2: Color | null = null;
  let medium3: Color | null = null;
  let dark: Color | null = null;

  let i = 0;
  while (!(light && medium && medium2 && medium3 && dark) && i < colorCounts.length) {
    const color = Color.fromStringify(colorCounts[i][0]);

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

  return colors.transformCloset(
    [light, medium, medium2, medium3, dark].filter<Color>(
      (color): color is Color => color != null,
    ),
  );
};

export const algorithm3 = (colorGrid: ColorGrid): ColorGrid => {
  return limitColors(colorGrid.transformRounded(6));
};
