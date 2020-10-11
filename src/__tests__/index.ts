import difference from "lodash/fp/difference";

const { readdirSync, statSync } = require(`fs`);
const { join } = require(`path`);

const ROOT_PATH = `${__dirname}/../..`;

const getFolders = (p: string) =>
  readdirSync(p).filter((f: string[]) => statSync(join(p, f)).isDirectory());
// const getFiles = (p: string) =>
//   readdirSync(p).filter((f: string[]) => statSync(join(p, f)).isFile());

// relatviePath: no / at beginning but / at end, like "src/"
const testFolders = (
  relativePath: string,
  requiredFolders: string[],
  optionalFolders: string[] = [],
) => {
  const testPath = `${ROOT_PATH}/${relativePath}`;
  requiredFolders.forEach((folderName) => {
    test(`required ./${relativePath}${folderName}/`, () => {
      expect(getFolders(testPath)).toContain(folderName);
    });
  });
  test(`unknown`, () => {
    const allowed = [...requiredFolders, ...optionalFolders];
    const unknownFolders = difference(getFolders(testPath), allowed);
    expect(unknownFolders).toHaveLength(0);
  });
};

describe(`Project File Structure`, () => {
  describe(`testing`, () => {
    test(`the test`, () => {});
  });
  describe(`root`, () => {
    describe(`folders`, () => {
      const required = [`public`, `assets`, `storybook`, `src`, `scripts`];
      const optional = [`node_modules`, `dist`, `build`, `.git`];
      required.forEach((folderName) => {
        test(`required ./${folderName}/`, () => {
          expect(getFolders(ROOT_PATH)).toContain(folderName);
        });
      });
      test(`unknown`, () => {
        const allowed = [...required, ...optional];
        const unknownFolders = difference(getFolders(ROOT_PATH), allowed);
        expect(unknownFolders).toHaveLength(0);
      });
    });
    describe(`files`, () => {
      // who cares right now
    });
  });
  describe(`src/`, () => {
    describe(`folders`, () => {
      testFolders(`src/`, [`__tests__`, `Components`, `Routes`, `Design`]);
    });
  });
});
