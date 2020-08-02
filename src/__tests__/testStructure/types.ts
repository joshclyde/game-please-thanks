export interface StructureEntry {
  name: string;
  path: string;
  innerPath: string;
  structure?: Array<StructureEntry>;
  fileExtension?: string;
}
