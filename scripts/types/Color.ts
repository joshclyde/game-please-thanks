export class Color {
  red: number;
  green: number;
  blue: number;
  alpha: number; // between 0 and 1?

  static fromStringify(colorString: string) {
    const values = colorString.split(`,`);
    return new this(
      Number(values[0]),
      Number(values[1]),
      Number(values[2]),
      Number(values[3]),
    );
  }

  constructor(red: number, green: number, blue: number, alpha?: number) {
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.alpha = alpha || 1;
  }

  isEqual(color: Color) {
    return (
      this.red === color.red &&
      this.green === color.green &&
      this.blue === color.blue &&
      this.alpha === color.alpha
    );
  }

  lengthBetween(color: Color) {
    return Math.sqrt(
      Math.pow(color.red - this.red, 2) +
        Math.pow(color.green - this.green, 2) +
        Math.pow(color.blue - this.blue, 2),
    );
  }

  rounded(value: number) {
    const base = 255 / value;
    return new Color(
      Math.round(this.red / base) * base,
      Math.round(this.blue / base) * base,
      Math.round(this.green / base) * base,
      this.alpha,
    );
  }

  closest(colors: Array<Color>) {
    return colors.reduce<Color>((winnerColor, currentColor) => {
      if (winnerColor.lengthBetween(this) > currentColor.lengthBetween(this)) {
        return currentColor;
      }
      return winnerColor;
    }, colors[0]);
  }

  get stringify() {
    return `${this.red},${this.green},${this.blue},${this.alpha}`;
  }
}
