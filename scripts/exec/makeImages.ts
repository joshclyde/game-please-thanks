import { readJson, readdir, pathExists } from "fs-extra";
import { read } from "jimp";

import { readMicrosoftImages } from "../utils";

interface Color {
  red: number;
  green: number;
  blue: number;
}

type ColorMap = Record<number, Record<number, Color>>;

const dimensions = (colorMap: ColorMap): [width: number, height: number] => {
  const width = Object.keys(colorMap).length;
  const height = Object.keys(colorMap[0]).length;
  return [width, height];
};

const sliceColorMap = (
  colorMap: ColorMap,
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  const newColorMap: ColorMap = {};
  for (let x2 = x; x2 < x + width; x2++) {
    for (let y2 = y; y2 < y + height; y2++) {
      addColor(newColorMap, colorMap[x2][y2], x2, y2);
    }
  }
  return newColorMap;
};

const lengthBetweenColors = (color1: Color, color2: Color) => {
  const one = Math.pow(color2.red - color1.red, 2);
  const two = Math.pow(color2.green - color1.green, 2);
  const three = Math.pow(color2.blue - color1.blue, 2);
  return Math.sqrt(one + two + three);
};

// const getNumber = (colorMap, ColorMap, x: number, y: number) => {
//   const color = colorMap[x][y];
//   const squareSize = 1; // number of pixels to branch out from the origin
//   let total = 0;
//   for (let xDiff = -squareSize; xDiff < squareSize + 1; xDiff++) {
//     for (let yDiff = -squareSize; yDiff < squareSize + 1; yDiff++) {
//       const x2 = x + xDiff;
//       const y2 = y + yDiff;
//       if ((x2 !== x || y2 !== y) && x2 >= 0 && y2 >= 0 && x2 < width && y2 < height) {
//         total += lengthBetweenColors(color, colorMap[x2][y2]);
//       }
//     }
//   }
//   return total / (Math.pow(squareSize * 2 + 1, 2) - 1);
// };

const roundColor = ({ red, green, blue }: Color, num: number) => {
  const base = 255 / num;
  return {
    red: Math.round(red / base) * base,
    blue: Math.round(blue / base) * base,
    green: Math.round(green / base) * base,
  };
};

const closestColor = (color: Color, colors: Array<Color>) => {
  return colors.reduce<Color>((winnerColor, currentColor) => {
    if (
      lengthBetweenColors(winnerColor, color) > lengthBetweenColors(currentColor, color)
    ) {
      return currentColor;
    }
    return winnerColor;
  }, colors[0]);
};

const forEachColor = (
  colorMap: ColorMap,
  exec: (color: Color, x: number, y: number) => void,
) => {
  Object.keys(colorMap).forEach((x) => {
    Object.keys(colorMap[x]).forEach((y) => {
      exec(colorMap[x][y], Number(x), Number(y));
    });
  });
};

const addColor = (colorMap: ColorMap, color: Color, x: number, y: number) => {
  if (!colorMap[x]) {
    colorMap[x] = {};
  }
  colorMap[x][y] = color;
};

const parseColorString = (colorString: string): Color => {
  const values = colorString.split(`,`);
  return {
    red: Number(values[0]),
    green: Number(values[1]),
    blue: Number(values[2]),
  };
};

const makeColorCountsMap = (colorMap: ColorMap) => {
  const colorCounts: Record<string, number> = {};
  forEachColor(colorMap, ({ red, green, blue }) => {
    const current = colorCounts[`${red},${green},${blue}`] || 0;
    colorCounts[`${red},${green},${blue}`] = current + 1;
  });
  return colorCounts;
};

const makeColorCountsArray = (colorMap: ColorMap) => {
  const colorCounts = makeColorCountsMap(colorMap);
  const entries = Object.entries(colorCounts);
  entries.sort(([_key1, value1], [_key2, value2]) => value2 - value1);
  return entries;
};

// Reduce colors to most popular.
const limitColors = (colorMap: ColorMap, numOfColors: number) => {
  const colorCounts = makeColorCountsArray(colorMap);
  const validColors = colorCounts.slice(0, numOfColors).map<Color>(([key]) => {
    return parseColorString(key);
  });
  const newColorMap: ColorMap = {};
  forEachColor(colorMap, (color, x, y) => {
    addColor(newColorMap, closestColor(color, validColors), x, y);
  });
  return newColorMap;
};

// Reduce colors to most popular with the biggest difference?
const limitColors2 = (colorMap: ColorMap, numOfColors: number) => {
  const colorCounts = makeColorCountsArray(colorMap);
  let validColors = [];
  let i = 0;
  while (validColors.length < numOfColors) {
    const [colorString] = colorCounts[i];
    const color = parseColorString(colorString);
    let shouldAdd = true;
    validColors.forEach((validColor) => {
      const length = lengthBetweenColors(color, validColor);
      console.log(`Length: ${length}`);
      if (length < 100) {
        shouldAdd = false;
      }
    });
    if (shouldAdd) {
      validColors.push(color);
    }
    i++;
  }
  const newColorMap: ColorMap = {};
  forEachColor(colorMap, (color, x, y) => {
    addColor(newColorMap, closestColor(color, validColors), x, y);
  });
  return newColorMap;
};

// Reduce colors to a light, medium, and dark color.
const limitColors3 = (colorMap: ColorMap, numOfColors: number) => {
  const colorCounts = makeColorCountsArray(colorMap);
  let light: Color;
  let medium: Color;
  let medium2: Color;
  let medium3: Color;
  let dark: Color;
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
  const validColors = [light, medium, medium2, medium3, dark];
  const newColorMap: ColorMap = {};
  forEachColor(colorMap, (color, x, y) => {
    addColor(newColorMap, closestColor(color, validColors), x, y);
  });
  return newColorMap;
};

const transformColorMap = (
  colorMap: ColorMap,
  transformFn: (color: Color, x: number, y: number) => Color,
) => {
  const newColorMap = {};
  forEachColor(colorMap, (color, x, y) =>
    addColor(newColorMap, transformFn(color, x, y), x, y),
  );
  return newColorMap;
};

// const popularColors = (colorMap: ColorMap, squareSize: number) => {
//   const [width, height] = dimensions(colorMap);
//   for (let i = 0; i < width; i += squareSize) {
//     for (let j = 0; j < height; j += squareSize) {
//       const slicedColorMap = sliceColorMap(colorMap, i, j, squareSize, squareSize);
//     }
//   }
//   forEachColor(colorMap, (color, x, y) => {});
// };

/*
  Algorithms.
*/

/*
  Pros
  - Allowing 6 colors makes some pics more fun.
  Cons
  - Doing the straight up most popular colors makes some look a bit odd. (minecrat + chicken horse)
*/
const algorithm1 = (colorMap: ColorMap): ColorMap => {
  const one = transformColorMap(colorMap, (color) => roundColor(color, 3));
  return limitColors(one, 6);
};

/*
  So far this is my top pick!

  Pros
    - The colors seem diverse.
    - Small amount of colors.
  Cons
    - The best color is not always picked out (not neccesarily bad since it gives it that not perfect style)
*/
const algorithm2 = (colorMap: ColorMap): ColorMap => {
  const one = transformColorMap(colorMap, (color) => roundColor(color, 6));
  return limitColors2(one, 4);
};

const algorithm3 = (colorMap: ColorMap): ColorMap => {
  const one = transformColorMap(colorMap, (color) => roundColor(color, 10));
  return limitColors3(one, 4);
};

const algorithm = algorithm2;

/*
  The goal of the created image is to make it look like pixel art.

  Pixel Art. To me, that means
  - smaller pallete of colors (maybe like 10-20 max)
  - smaller size (could be pretty small, maybe 64x64 max)
  - 

  Notes...

  - It may be difficuly to make pixel art from the pictures that are
  much more detailed. Perhaps I can detect how detailed a picture is
  and somehow involve that with the algorithm. For example, if a
  picture is more detailed maybe i'll allow more colors.

  - The more detailed parts may be harder to pixelate. Could I treat 
  the image in 2 layers, with the detailed parts being the above part
  to ensure the details are seen?


*/
const createImage = async (fileName: string) => {
  console.log(`Creating ${fileName}`);
  try {
    const image = await read(`./scripts/data/images/microsoftImages/${fileName}`);
    image.resize(64, 64);

    const originalColorMap: ColorMap = {};
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      addColor(
        originalColorMap,
        {
          red: this.bitmap.data[idx + 0],
          green: this.bitmap.data[idx + 1],
          blue: this.bitmap.data[idx + 2],
        },
        x,
        y,
      );
    });

    const newColorMap = algorithm(originalColorMap);
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      this.bitmap.data[idx + 0] = newColorMap[x][y].red;
      this.bitmap.data[idx + 1] = newColorMap[x][y].green;
      this.bitmap.data[idx + 2] = newColorMap[x][y].blue;
    });

    image.write(`./scripts/data/images/restyled/${fileName}`);
    console.log(`Finished ${fileName}`);
  } catch (err) {
    console.log(`ERROR`);
    console.log(err);
  }
};

const execute = async () => {
  const microsoftImageFileNames = await readMicrosoftImages();
  const start = async (index: number) => {
    await createImage(microsoftImageFileNames[index]);
    if (index + 1 < microsoftImageFileNames.length) {
      await start(index + 1);
    }
  };
  start(0);
};
execute();
