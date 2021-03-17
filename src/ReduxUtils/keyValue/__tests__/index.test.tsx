import { makeKeyValueFactory } from "../";

type EntryValue = string;

interface State {
  testing: Record<string, EntryValue>;
}

const everything = makeKeyValueFactory<State, EntryValue>({
  actionIdentifier: `TESTING`,
  defaultValue: `hey hey`,
  selectStateFromRoot: (state) => state.testing,
});

const entryId = `testEntryId`;
const entryValue = `testEntryValue`;

describe(`makeKeyValueFactory`, () => {
  describe(`actions`, () => {
    test(`create entry without a value`, () => {
      expect(everything.makeActionCreateEntry(entryId)).toMatchInlineSnapshot(`
        Object {
          "payload": Object {
            "entryId": "testEntryId",
            "entryValue": undefined,
          },
          "type": "CREATE_ENTRY_TESTING",
        }
      `);
    });
    test(`create entry with a value`, () => {
      expect(everything.makeActionCreateEntry(entryId, entryValue))
        .toMatchInlineSnapshot(`
        Object {
          "payload": Object {
            "entryId": "testEntryId",
            "entryValue": "testEntryValue",
          },
          "type": "CREATE_ENTRY_TESTING",
        }
      `);
    });
    test(`set entry value`, () => {
      expect(everything.makeActionSetEntryValue(entryId, entryValue))
        .toMatchInlineSnapshot(`
        Object {
          "payload": Object {
            "entryId": "testEntryId",
            "entryValue": "testEntryValue",
          },
          "type": "SET_ENTRY_VALUE_TESTING",
        }
      `);
    });
  });
  describe(`reducers`, () => {
    test(`initial state`, () => {
      expect(everything.reducer(undefined, { type: `INIT_STORE` })).toMatchInlineSnapshot(
        `Object {}`,
      );
    });
    test(`dispatch some actions`, () => {
      let state = everything.reducer(undefined, { type: `INIT_STORE` });
      expect(state).toMatchInlineSnapshot(`Object {}`);
      state = everything.reducer(state, everything.makeActionCreateEntry(entryId));
      expect(state).toMatchInlineSnapshot(`
          Object {
            "testEntryId": "hey hey",
          }
        `);
      state = everything.reducer(
        state,
        everything.makeActionSetEntryValue(entryId, entryValue),
      );
      expect(state).toMatchInlineSnapshot(`
          Object {
            "testEntryId": "testEntryValue",
          }
        `);
      state = everything.reducer(
        state,
        everything.makeActionSetEntryValue(entryId, `different value`),
      );
      expect(state).toMatchInlineSnapshot(`
          Object {
            "testEntryId": "different value",
          }
        `);
      state = everything.reducer(state, everything.makeActionCreateEntry(`anotherOne`));
      expect(state).toMatchInlineSnapshot(`
          Object {
            "anotherOne": "hey hey",
            "testEntryId": "different value",
          }
        `);
      state = everything.reducer(
        state,
        everything.makeActionSetEntryValue(`anotherOne`, `anotherValue`),
      );
      expect(state).toMatchInlineSnapshot(`
          Object {
            "anotherOne": "anotherValue",
            "testEntryId": "different value",
          }
        `);
    });
  });
  describe(`selectors`, () => {
    let stateSlice: Record<string, EntryValue>;
    beforeEach(() => {
      stateSlice = everything.reducer(undefined, { type: `INIT_STORE` });
      stateSlice = everything.reducer(
        stateSlice,
        everything.makeActionCreateEntry(entryId, entryValue),
      );
    });
    describe(`selectDoesEntryExist`, () => {
      test(`does NOT exist`, () => {
        expect(
          everything.selectDoesEntryExist({ testing: stateSlice }, `doesntexist`),
        ).toMatchInlineSnapshot(`false`);
      });
      test(`does exist`, () => {
        expect(
          everything.selectDoesEntryExist({ testing: stateSlice }, entryId),
        ).toMatchInlineSnapshot(`true`);
      });
    });
    describe(`selectEntryValue`, () => {
      test(`get it`, () => {
        expect(
          everything.selectEntryValue({ testing: stateSlice }, entryId),
        ).toMatchInlineSnapshot(`"testEntryValue"`);
      });
    });
  });
});
