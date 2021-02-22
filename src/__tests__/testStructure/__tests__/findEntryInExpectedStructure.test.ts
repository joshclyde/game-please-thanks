import { ArrayOfExpected } from "../../types";
import { findEntryInExpectedStructure } from "../findEntryInExpectedStructure";

const indexFile = {
  name: `index`,
  description: `The index file`,
  fileExtension: [`ts`, `tsx`],
};

const expectedStructure: ArrayOfExpected = [
  indexFile,
  {
    name: `Folder`,
    description: `The folder of all folders`,
    structure: [indexFile],
  },
  {
    name: `FolderWithManyFiles`,
    description: `The folder with many files`,
    structure: [
      indexFile,
      { name: `anotherOne`, description: `Another file`, fileExtension: [`js`] },
    ],
  },
  {
    name: `Level1`,
    description: `Level 1 folder`,
    structure: [
      {
        name: `Level2`,
        description: `Level 2 folder`,
        structure: [indexFile],
      },
    ],
  },
  {
    name: `A`,
    description: `Folder A`,
    structure: [
      {
        name: `B`,
        description: `Folder B`,
        structure: [indexFile],
      },
      {
        name: `C`,
        description: `Folder C`,
        structure: [indexFile],
      },
    ],
  },
];

describe.skip(`findEntryInExpectedStructure`, () => {
  test(`correct - 1 directory deep`, () => {
    expect(
      findEntryInExpectedStructure(
        {
          name: `Folder`,
          path: `/User/Path/Folder`,
          innerPath: `Folder`,
          structure: [],
        },
        expectedStructure,
      ),
    ).toMatchInlineSnapshot(`undefined`);
  });
  test(`correct - 2 directories deep`, () => {
    expect(
      findEntryInExpectedStructure(
        {
          name: `B`,
          path: `/User/A/B`,
          innerPath: `A/B`,
          structure: [],
        },
        expectedStructure,
      ),
    ).toMatchInlineSnapshot(`undefined`);
  });

  test(`correct - file within no directories`, () => {
    expect(
      findEntryInExpectedStructure(
        {
          name: `index`,
          path: `/User/Path/Folder`,
          innerPath: `Folder/index`,
          structure: [],
        },
        expectedStructure,
      ),
    ).toMatchInlineSnapshot(`undefined`);
  });
  test.todo(`correct - file within 1 directories`);
  test.todo(`correct - file within 2 directories`);
  test.todo(`correct - file with 2 directories`);

  describe(`single file`, () => {
    test(`correct`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `index`,
            path: `/User/Path/index.ts`,
            innerPath: `index.ts`,
            fileExtension: `ts`,
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`undefined`);
    });
    test(`incorrect - file extension does not match`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `index`,
            path: `/User/Path/index.ts`,
            innerPath: `index.ts`,
            fileExtension: `js`,
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`
        "ERROR: Failed.
        - filePath: index.ts
        - furthestMatchedPath: "
      `);
    });
    test(`incorrect - name does not match`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `file`,
            path: `/User/Path/index.ts`,
            innerPath: `index.ts`,
            fileExtension: `ts`,
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`
        "ERROR: Failed.
        - filePath: index.ts
        - furthestMatchedPath: "
      `);
    });
  });
  describe(`single file inside directory`, () => {
    test(`correct`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `Folder`,
            path: `/User/Path/Folder`,
            innerPath: `Folder`,
            structure: [
              {
                name: `index`,
                path: `/User/Path/Folder/index.ts`,
                innerPath: `Folder/index.ts`,
                fileExtension: `ts`,
              },
            ],
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`undefined`);
    });
    test(`incorrect - file name does not match`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `wrong`,
            path: `/User/Path/Folder/wrong.ts`,
            innerPath: `Folder/wrong.ts`,
            fileExtension: `ts`,
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`
        "ERROR: Failed.
        - filePath: Folder/wrong.ts
        - furthestMatchedPath: Folder"
      `);
    });
    test(`incorrect - folder name does not match`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `index`,
            path: `/User/Path/Wrong/index.ts`,
            innerPath: `Wrong/index.ts`,
            fileExtension: `ts`,
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`
        "ERROR: Failed.
        - filePath: Wrong/index.ts
        - furthestMatchedPath: "
      `);
    });
  });
  describe(`nested directories`, () => {
    test(`correct - A`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `A`,
            path: `/User/Path/A`,
            innerPath: `A`,
            structure: [],
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`undefined`);
    });
    test(`correct - B`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `B`,
            path: `/User/Path/A/B`,
            innerPath: `A/B`,
            structure: [],
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`undefined`);
    });
    test(`correct - A/B/index`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `index`,
            path: `/User/Path/A/B/index.ts`,
            innerPath: `A/B/index.ts`,
            fileExtension: `ts`,
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`undefined`);
    });
    test(`incorrect - unkown folder`, () => {
      expect(
        findEntryInExpectedStructure(
          {
            name: `index`,
            path: `/User/Path/A/B/C/index.ts`,
            innerPath: `A/B/C/index.ts`,
            fileExtension: `ts`,
          },
          expectedStructure,
        ),
      ).toMatchInlineSnapshot(`
        "ERROR: Failed.
        - filePath: A/B/C/index.ts
        - furthestMatchedPath: A/B"
      `);
    });
  });
});
