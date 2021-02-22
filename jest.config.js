const { defaults } = require(`jest-config`);

// eslint-disable-next-line import/no-commonjs
module.exports = {
  roots: [`<rootDir>/src`],
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, `.ts`, `.tsx`],
  verbose: true,
  testMatch: [`**/?(*.)+(test).[jt]s?(x)`],
};
