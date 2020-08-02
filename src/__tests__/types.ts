/*eslint quotes: ["error", "backtick"]*/

// the directory is optional and the contents don't matter
const DOMAINS = [`smite`, `flashcards`];

interface WhereAmI {
  path: string;
  name: string;
  fileExtension: string;
  isFile: boolean;
  isDirectory: boolean;
  getParentDirectoryWhereAmI: () => WhereAmI;
  getAllChildrenWhereAmI: () => Array<WhereAmI>;
}

export interface ExpectedFile {
  name: string;
  description: string;
  fileExtension: Array<string>;
}

export interface ExpectedStructureEntry {
  name: string;
  description: string;
  structure: ArrayOfExpected;
}

export type ExpectedComplexEntry = (whereAmI: WhereAmI) => ExpectedStructureEntry;

type ExpectedEntry = ExpectedStructureEntry | ExpectedFile | ExpectedComplexEntry;

export const checkIsDirectory = (
  entry: ExpectedEntry,
): entry is ExpectedStructureEntry => {
  return (entry as ExpectedStructureEntry).structure != null;
};

export const checkIsFile = (entry: ExpectedEntry): entry is ExpectedFile => {
  return (entry as ExpectedFile).fileExtension != null;
};

export const checkIsFunction = (entry: ExpectedEntry): entry is ExpectedComplexEntry => {
  return typeof (entry as ExpectedComplexEntry) === `function`;
};

export type ArrayOfExpected = Array<ExpectedEntry>;

const indexFile: ExpectedFile = {
  name: `index`,
  description: `The index file`,
  fileExtension: [`ts`, `tsx`],
};

const typesFile: ExpectedFile = {
  name: `index`,
  description: `The types file`,
  fileExtension: [`ts`],
};

const directory: ArrayOfExpected = [
  {
    name: `__tests__`,
    description: `Unit Tests`,
    structure: [
      (whereAmI: WhereAmI) => {
        const parentDirectory = whereAmI
          .getParentDirectoryWhereAmI()
          .getAllChildrenWhereAmI()
          .filter(({ isFile }) => isFile);
        if (parentDirectory.find(({ name }) => name === whereAmI.name)) {
          return {
            name: whereAmI.name,
            description: `Something`,
            structure: [...directory, ...directories],
          };
        }
      },
    ],
  },
  indexFile,
  typesFile,
];

const directories: ArrayOfExpected = [
  (whereAmI: WhereAmI) => {
    if (whereAmI.isDirectory) {
      return {
        name: whereAmI.name,
        description: `A Directory`,
        structure: [...directory, ...directories],
      };
    }
  },
];

const domainDirectories: ArrayOfExpected = [
  (whereAmI: WhereAmI) => {
    if (whereAmI.isDirectory && DOMAINS.includes(whereAmI.name)) {
      return {
        name: whereAmI.name,
        description: `A Domain Directory`,
        structure: [...directory, ...directories],
      };
    }
  },
];

export const projectFileStructure: ArrayOfExpected = [
  ...directory,
  {
    name: `Constants`,
    description: `Constants. No dependencies allowed.`,
    structure: [...directory, ...directories],
  },
  {
    name: `Utils`,
    description: `Functions. No react, no redux.`,
    structure: [...directory, ...directories],
  },
  {
    name: `Redux`,
    description: `Redux! No react code allowed.`,
    structure: [
      ...directory,
      (whereAmI: WhereAmI) => {
        if (whereAmI.isDirectory) {
          return {
            name: whereAmI.name,
            description: `TODO: something`,
            structure: [
              ...directory,
              { name: `actions`, description: `Actions!`, structure: [...directory] },
              { name: `reducers`, description: `Reducers!`, structure: [...directory] },
              {
                name: `selectors`,
                description: `Selectors!`,
                structure: [...directory],
              },
            ],
          };
        }
      },
    ],
  },
  {
    name: `Hocs`,
    description: `Higher-Order Components`,
    structure: [...directory, ...directories],
  },
  {
    name: `Hooks`,
    description: `Hooks!`,
    structure: [...directory, ...directories],
  },
  {
    name: `Components`,
    description: `Contains all react components.`,
    structure: [
      ...directory,
      {
        name: `Application`,
        description: `Contains any application-wide components. This one is special.`,
        structure: [...directories],
      },
      {
        name: `Common`,
        description: `Contains reusable/abstracted components.
Kinda wishy-washy what belongs in here.
You know it when you know it I guess.`,
        structure: [...directories],
      },
      {
        name: `Design`,
        description: `Contains react components that are wrappers for DOM elements and other design-y things.
This is to ensure that design is consistent across the site.`,
        structure: [...directories],
      },
      {
        name: `Domain`,
        description: `Contains reusable react components that are specific to a certain domain of the site.`,
        structure: [...domainDirectories],
      },
      {
        name: `Routes`,
        description: `Contains all of the actual routes for the website and any components specific to a page on the website.
Nothing should really be resuable. If it's reusable then it should belong in "Domain".
Just because something is only used on one page doesn't mean that is not reusable,
so don't be afraid of putting thing in "Domain" instead of "Routes.`,
        structure: [...directories],
      },
    ],
  },
];
