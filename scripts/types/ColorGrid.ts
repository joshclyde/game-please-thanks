import Jimp from "jimp";

import { Color } from "./Color";

export class ColorGrid {
  grid: Array<Array<Color>>;

  static fromImage(image: Jimp): ColorGrid {
    const colorGrid = new this(image.bitmap.width);
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      colorGrid.grid[x][y] = new Color(
        this.bitmap.data[idx + 0],
        this.bitmap.data[idx + 1],
        this.bitmap.data[idx + 2],
        this.bitmap.data[idx + 3],
      );
    });
    return colorGrid;
  }

  constructor(width: number) {
    this.grid = new Array(width).fill([]);
  }

  get width() {
    return Object.keys(this.grid).length;
  }

  get height() {
    return Object.keys(this.grid[0]).length;
  }

  // maybe change this to not be colorStringify as key
  get colorCounts(): Array<[colorStringify: string, count: number]> {
    const colorCountsMap: Record<string, number> = {};
    this.forEachColor((color) => {
      colorCountsMap[color.stringify] = (colorCountsMap[color.stringify] || 0) + 1;
    });
    return Object.entries(colorCountsMap).sort(
      ([, value1], [, value2]) => value2 - value1,
    );
  }

  // get image(): Jimp {

  // }

  // TODO: change this to an iterator
  forEachColor(exec: (color: Color, x: number, y: number) => void) {
    this.grid.forEach((row, x) => {
      row.forEach((color, y) => {
        exec(color, x, y);
      });
    });
  }

  transform(createColor: (color: Color, x: number, y: number) => Color) {
    const newColorGrid = new ColorGrid(this.width);
    this.forEachColor((color, x, y) => {
      newColorGrid.grid[x][y] = createColor(color, x, y);
    });
    return newColorGrid;
  }

  transformCloset(colors: Array<Color>): ColorGrid {
    return this.transform((color) => color.closest(colors));
  }

  transformRounded(value: number): ColorGrid {
    return this.transform((color) => color.rounded(value));
  }

  // [Symbol.iterator]() {
  //   var index = -1;
  //   var data = this._data;

  //   return {
  //     next: () => ({ value: data[++index], done: !(index in data) }),
  //   };
  // }

  // slice(x: number, y: number, width: number, height: number) {
  //   const slicedColorGrid = new ColorGridNew(width);
  //   for (let x2 = x; x2 < x + width; x2++) {
  //     for (let y2 = y; y2 < y + height; y2++) {
  //       slicedColorGrid.grid[x2][y2] =
  //       addColor(colorGridSliced, colorGrid[x2][y2], x2, y2);
  //     }
  //   }
  //   return colorGridSliced;
  // }

  // color(x: number, y: number) {
  //   return this.grid[x][y];
  // }

  // get name() {
  //   return this.grid[x];
  // }
}
