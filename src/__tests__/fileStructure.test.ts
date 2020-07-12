import fs from "fs-extra";
// import fs from "fs";
import {
  projectFileStructure,
  ArrayOfExpected,
  ExpectedFile,
  ExpectedStructureEntry,
  isFile,
} from "./types";

// TODO: don't hardcode this
const ROOT_DIR = "/Users/joshclyde/stuff/repos/all-the-things-ui/src";
// const ROOT_DIR = `${__dirname}/../..`;

interface StructureEntry {
  name: string;
  path: string;
  innerPath: string;
  structure?: Array<StructureEntry>;
}

const getCurrentStucture = (path: string, rootPath: string): Array<StructureEntry> => {
  const structure = fs.readdirSync(path, { withFileTypes: true }).map(
    (fsDir): StructureEntry => {
      const childName = fsDir.name;
      const childPath = `${path}/${childName}`;
      const childInnerPath = childPath.replace(`${rootPath}/`, "");
      const childStructure =
        fsDir.isDirectory() && getCurrentStucture(childPath, rootPath);
      return {
        name: childName,
        path: childPath,
        innerPath: childInnerPath,
        structure: childStructure,
      };
    },
  );
  return structure;
};

// we will modify this so we are gonna deep clone it
const expectedStructure = JSON.parse(
  JSON.stringify(projectFileStructure),
) as ArrayOfExpected;

const findEntryInExpectedStructure = (entry: StructureEntry) => {
  const innerPathNames = entry.innerPath.split("/");
  const isDirectory = entry.structure;
  const isFile = !isDirectory;
  console.log(innerPathNames);
  let currentExpectedStructure = expectedStructure;
  for (let i = 0; i < innerPathNames.length; i++) {
    const innerPathName = innerPathNames[i];
    let foundExpected;
    for (const expectedEntry of currentExpectedStructure) {
      if (typeof expectedEntry === "string") {
        if (isFile && expectedEntry === innerPathName) {
          return true;
        }
        // END OF THE LINE
        expectedEntry;
      } else if (typeof expectedEntry === "function") {
        // const possibleEntry = expectedEntry();
      }
      // if (expectedEntry.name === innerPathName) {
      // }
    }
  }
};

const testStructure = (structure: Array<StructureEntry>) => {
  const errors: Array<string> = [];
  if (!structure) {
    return [];
  }
  for (const entry of structure) {
    // findEntryInExpectedStructure(entry);
    if (
      !projectFileStructure.find((expectedEntry) => {
        if (typeof expectedEntry === "string") {
          return expectedEntry === entry.name;
        } else if (typeof expectedEntry === "function") {
          return false;
        } else if (isFile(expectedEntry)) {
          return (expectedEntry as ExpectedFile).name === entry.name;
        } else {
          return (expectedEntry as ExpectedStructureEntry).name === entry.name;
        }
      })
    ) {
      errors.push(`Failed on ${entry.name}`);
    }
    // errors.push(...testStructure(entry.structure));
  }
  return errors;
};

describe("Project File Structure", () => {
  test("Test it all!!", async () => {
    const structure = getCurrentStucture(ROOT_DIR, ROOT_DIR);
    // console.log(JSON.stringify(structure, null, 2));
    // console.log(structure);
    // console.log(expectedStructure);
    const errors = testStructure(structure);
    if (errors.length > 0) {
      throw new Error(JSON.stringify(errors, null, 2));
    }
  });
  // test("Test utils", async () => {
  //   const structure = getCurrentStucture(ROOT_DIR, ROOT_DIR);
  //   console.log(JSON.stringify(structure, null, 2));
  //   // console.log(structure);
  //   // console.log(expectedStructure);
  //   const errors = testStructure(structure);
  //   if (errors.length > 0) {
  //     throw new Error(JSON.stringify(errors));
  //   }
  // });
});
