export const multiclass = (...classes: string[]) =>
  classes.reduce((acc, val) => {
    if (val) {
      return `${acc} ${val}`;
    } else {
      return acc;
    }
  }, "");
