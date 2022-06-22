export interface Color {
  red: number;
  green: number;
  blue: number;
}

// 2d grid of colors
// colorMap[x][y] = color at the coordinate
export type ColorGrid = Record<string, Record<string, Color>>;
