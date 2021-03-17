import { renderHook, act } from "@testing-library/react-hooks";
import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { makeAction2 } from "../makeAction";
import { makeReducer2 } from "../makeReducer";
import { makeUseSelector } from "../makeUseSelector";

// saw this naming convention here. i think i like it. could be cool to have a lint rule for it
// https://codesandbox.io/s/todo-app-with-react-redux-hooks-and-react-testing-library-qsli5?file=/src/Root.test.js
describe(`GIVEN a redux store created from ReduxUtils`, () => {
  /*
    TODO: i don't like that typescript won't infer these types because they are in the beforeEach :(
    but also maybe typing them manually is a good way to test that the inferred types work?
  */
  let store: ReturnType<typeof createStore>;
  let useDispatchAction: () => (value: string) => void;
  let wrapper: React.FC;
  let useSelector: () => string;
  beforeEach(() => {
    const { reducer, addCase } = makeReducer2({
      initialState: `init value`,
    });
    const { makeCase, useDispatchAction: localUseDispatchAction } = makeAction2(
      `APPEND_VALUE`,
      (value: string) => ({
        value,
      }),
    );
    useDispatchAction = localUseDispatchAction;
    useSelector = makeUseSelector(() => (state: { stringValue: string }) =>
      state.stringValue,
    );
    // uses both state and action
    addCase(makeCase<string>((state, action) => `${state} AND ${action.payload.value}`));
    store = createStore(combineReducers({ stringValue: reducer }));
    wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
  });
  test(`THEN the initial state should be as expected`, () => {
    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "stringValue": "init value",
      }
    `);
  });
  test(`THEN the state selected by useSelector should be as expected`, () => {
    const { result } = renderHook(() => useSelector(), { wrapper });
    expect(result.current).toMatchInlineSnapshot(`"init value"`);
  });
  describe(`WHEN an action is dispatched`, () => {
    describe(`AND the action is a case handled by the reducer`, () => {
      beforeEach(() => {
        store.dispatch({ type: `APPEND_VALUE`, payload: { value: `new value` } });
      });
      test(`THEN the new state should be as expected`, () => {
        expect(store.getState()).toMatchInlineSnapshot(`
          Object {
            "stringValue": "init value AND new value",
          }
        `);
      });
      test(`THEN the new state selected by useSelector should be as expected`, () => {
        const { result } = renderHook(() => useSelector(), { wrapper });
        expect(result.current).toMatchInlineSnapshot(`"init value AND new value"`);
      });
    });
    describe(`AND the action is not a case handled by the reducer`, () => {
      test(`THEN the new state should be the same as the previous state`, () => {
        store.dispatch({ type: `NOT_HANDLED`, payload: { value: `not handled` } });
        expect(store.getState()).toMatchInlineSnapshot(`
          Object {
            "stringValue": "init value",
          }
        `);
      });
    });
  });
  describe(`WHEN an action is dispatched by useDispatchAction`, () => {
    test(`THEN the new state should be as expected`, () => {
      const { result } = renderHook(() => useDispatchAction(), { wrapper });
      act(() => {
        result.current(`new value from useDispatchAction`);
      });
      expect(store.getState()).toMatchInlineSnapshot(`
        Object {
          "stringValue": "init value AND new value from useDispatchAction",
        }
      `);
      act(() => {
        result.current(`another value from useDispatchAction`);
      });
      expect(store.getState()).toMatchInlineSnapshot(`
        Object {
          "stringValue": "init value AND new value from useDispatchAction AND another value from useDispatchAction",
        }
      `);
    });
  });
});
