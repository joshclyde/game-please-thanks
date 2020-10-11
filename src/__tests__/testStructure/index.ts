import { findEntryInExpectedStructure } from "./findEntryInExpectedStructure";
import { StructureEntry } from "./types";

export const testStructure = (structure: Array<StructureEntry>) => {
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
