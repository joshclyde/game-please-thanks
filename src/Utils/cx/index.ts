export const cx = (...classes: Array<string>) =>
  classes.reduce((acc, val) => {
    if (val) {
      return `${acc} ${val}`;
    } else {
      return acc;
    }
  }, ``);
