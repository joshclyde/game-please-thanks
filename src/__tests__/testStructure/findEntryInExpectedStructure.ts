import {
  checkIsDirectory,
  checkIsFile,
  checkIsFunction,
  ArrayOfExpected,
} from "../types";

import { StructureEntry } from "./types";

const findLayer = () => {};

export const findEntryInExpectedStructure = (
  entry: StructureEntry,
  expectedStructure: ArrayOfExpected,
) => {
  const innerPathNames = entry.innerPath.split(`/`);
  const isDirectory = entry.structure;
  const isFile = !isDirectory;
  let currentExpectedStructure = expectedStructure;
  let errorMessage;

  for (let i = 0; i < innerPathNames.length; i++) {
    const innerPathName = innerPathNames[i];
    const isFinalPath = i === innerPathNames.length - 1;
    let foundEntry = false;
    for (const expectedEntry of currentExpectedStructure) {
      if (isFinalPath && isFile && checkIsFile(expectedEntry)) {
        const doesNameMatch = expectedEntry.name === entry.name;
        const doesFileExtensionMatch = expectedEntry.fileExtension.includes(
          entry.fileExtension,
        );
        if (doesNameMatch && doesFileExtensionMatch) {
          foundEntry = true;
          break;
        }
      }

      if (!(isFinalPath && isFile) && checkIsDirectory(expectedEntry)) {
        if (expectedEntry.name === innerPathName) {
          currentExpectedStructure = expectedEntry.structure;
          foundEntry = true;
          break;
        }
      }
    }
    if (!foundEntry) {
      const filePath = innerPathNames.join(`/`);
      const furthestMatchedPath = innerPathNames.slice(0, i).join(`/`);
      errorMessage = `ERROR: Failed.
- filePath: ${filePath}
- furthestMatchedPath: ${furthestMatchedPath}`;
      break;
    }
  }
  return errorMessage;
};
