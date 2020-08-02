import fs from "fs-extra";
// import fs from "fs";
import {
  projectFileStructure,
  ArrayOfExpected,
  ExpectedFile,
  ExpectedStructureEntry,
  checkIsDirectory,
  checkIsFile,
} from "./types";

// TODO: don't hardcode this
const ROOT_DIR = "/Users/joshclyde/stuff/repos/all-the-things-ui/src";
// const ROOT_DIR = `${__dirname}/../..`;

interface StructureEntry {
  name: string;
  path: string;
  innerPath: string;
  isFile: boolean;
  isDirectory: boolean;
  structure?: Array<StructureEntry>;
  fileExtension?: string;
}

const getCurrentStucture = (path: string, rootPath: string): Array<StructureEntry> => {
  const structure = fs.readdirSync(path, { withFileTypes: true }).map(
    (fsDir): StructureEntry => {
      let childName = fsDir.name;
      const childPath = `${path}/${childName}`;
      const childInnerPath = childPath.replace(`${rootPath}/`, "");
      let isDirectory = false;
      let childStructure;
      let fileExtension;
      if (fsDir.isDirectory()) {
        childStructure = getCurrentStucture(childPath, rootPath);
        isDirectory = true;
      } else {
        const split = childName.split(".");
        childName = split[0];
        fileExtension = split.join(".");
      }

      return {
        name: childName,
        path: childPath,
        innerPath: childInnerPath,
        structure: childStructure,
        isDirectory,
        isFile: !isDirectory,
      };
    },
  );
  return structure;
};

const findEntryInExpectedStructure = (entry: StructureEntry) => {
  const innerPathNames = entry.innerPath.split("/");
  const isDirectory = entry.structure;
  const isFile = !isDirectory;
  let currentExpectedStructure = projectFileStructure;
  let error = true;

  for (let i = 0; i < innerPathNames.length; i++) {
    const innerPathName = innerPathNames[i];
    const isFinalPath = i === innerPathNames.length - 1;
    for (const expectedEntry of currentExpectedStructure) {
      if (isFinalPath && isFile && checkIsFile(expectedEntry)) {
        const split = innerPathName.split(".");
        const fileName = split[0];
        const fileExtension = split.slice(1).join(".");
        if (
          expectedEntry.name === fileName &&
          expectedEntry.fileExtension.includes(fileExtension)
        ) {
          error = false;
        }
      }

      if (!(isFinalPath && isFile) && checkIsDirectory(expectedEntry)) {
        if (expectedEntry.name === innerPathName) {
          currentExpectedStructure = expectedEntry.structure;
          if (isFinalPath && isDirectory) {
            error = false;
          }
        }
      }
    }
  }
  return error;
};

const testStructure = (structure: Array<StructureEntry>) => {
  const errors: Array<string> = [];
  if (!structure) {
    return [];
  }
  for (const entry of structure) {
    const isEntryInExpectedStructure = findEntryInExpectedStructure(entry);
    if (isEntryInExpectedStructure) {
      errors.push(`Failed on ${entry.name}`);
    }
    if (entry.structure) {
      errors.push(...testStructure(entry.structure));
    }
  }
  return errors;
};

describe("Project File Structure", () => {
  test("Test it all!!", async () => {
    // const errors = testStructure(structure);
    // if (errors.length > 0) {
    //   throw new Error(JSON.stringify(errors, null, 2));
    // }
  });
});
