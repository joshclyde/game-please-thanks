import { convertToDotNotation } from "../";

describe(`convertToDotNotation`, () => {
  test(`empty object`, () => {
    expect(convertToDotNotation({})).toMatchInlineSnapshot(`Object {}`);
  });
  test(`1 field`, () => {
    expect(convertToDotNotation({ hey: `asdf` })).toMatchInlineSnapshot(`
      Object {
        "hey": "asdf",
      }
    `);
  });
  test(`2 fields`, () => {
    expect(convertToDotNotation({ one: `1`, two: 2 })).toMatchInlineSnapshot(`
      Object {
        "one": "1",
        "two": 2,
      }
    `);
  });
  test(`nested object`, () => {
    expect(
      convertToDotNotation({
        one: `1`,
        two: 2,
        three: { four: `4`, five: { six: [`7`, `8`, `9`] } },
      }),
    ).toMatchInlineSnapshot(`
      Object {
        "one": "1",
        "three.five.six": Array [
          "7",
          "8",
          "9",
        ],
        "three.four": "4",
        "two": 2,
      }
    `);
  });
});
