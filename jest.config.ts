import type { Config } from "@jest/types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defaults } from "jest-config";
import { pathsToModuleNameMapper } from "ts-jest/utils";

const config: Config.InitialOptions = {
  roots: [`<rootDir>/src`],
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, `.ts`, `.tsx`],
  verbose: true,
  testMatch: [`**/?(*.)+(test).[jt]s?(x)`],
  setupFilesAfterEnv: [`<rootDir>/jest-setup.ts`],
  moduleNameMapper: pathsToModuleNameMapper(
    // TODO: don't copy paste this. but can't import json file right now.
    {
      "@Api": [`./src/Api/index`],
      "@Utils": [`./src/Utils/index`],
      "@Redux": [`./src/Redux/index`],
      "@ReduxUtils": [`./src/ReduxUtils/index`],
      "@Hocs": [`./src/Hocs/index`],
      "@Hooks": [`./src/Hooks/index`],
      "@Design": [`./src/Components/Design/index`],
      "@DesignRedux": [`./src/Components/DesignRedux/index`],
      "@DesignEnhanced": [`./src/Components/DesignEnhanced/index`],
      "@Common": [`./src/Components/Common/index`],
      "@Domain": [`./src/Components/Domain/index`],
      "@Routes": [`./src/Components/Routes/index`],
      "@Firebase": [`./src/Firebase/index`],
      "@Types": [`./src/Types/index`],
    },
    { prefix: `<rootDir>/` },
  ),
};

// eslint-disable-next-line import/no-default-export
export default config;
