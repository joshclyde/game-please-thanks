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
