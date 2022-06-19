export const appendKeysWithPrefix = (prefix: string, data: Record<string, any>) => {
  return Object.keys(data).reduce<Record<string, any>>(
    (acccumulated, innerKey: string) => {
      return {
        ...acccumulated,
        [`${prefix}${innerKey}`]: data[innerKey],
      };
    },
    {},
  );
};

export const filterObject = <T>(obj: Record<string, T>, keys: Array<string>) => {
  const retValue: Record<string, T> = {};
  keys.forEach((key) => {
    retValue[key] = obj[key];
  });
  return retValue;
};
