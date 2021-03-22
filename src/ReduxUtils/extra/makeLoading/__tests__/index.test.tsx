import { renderHook, act } from "@testing-library/react-hooks";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { makeLoading } from "../";

describe(`GIVEN a redux store created from makeLoading ReduxUtils`, () => {
  let store: ReturnType<typeof createStore>;
  let wrapper: React.FC<{}>;
  let useLoad: () => (...args: Array<any>) => void;
  let mockExecute = jest.fn();
  let resolveLoad: (value?: any) => void;
  let rejectLoad: (value?: any) => void;
  beforeEach(() => {
    mockExecute.mockReturnValue(
      new Promise((resolve, reject) => {
        resolveLoad = resolve;
        rejectLoad = reject;
      }),
    );
    const loading = makeLoading({
      START: `START_TEST`,
      SUCCESS: `SUCCESS_TEST`,
      FAILURE: `FAILURE_TEST`,
      useExecute: () => mockExecute,
    });
    useLoad = loading.useLoad;
    store = createStore(loading.reducers);
    wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test(`THEN the initial state should be as expected`, () => {
    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "error": null,
        "isFailure": false,
        "isPending": false,
        "isSuccess": false,
      }
    `);
  });
  describe(`WHEN loading has started`, () => {
    beforeEach(() => {
      const renderHookRet = renderHook(() => useLoad(), { wrapper });
      act(() => {
        renderHookRet.result.current(
          `value passed in to load (which will then be passed to execute)`,
        );
      });
    });
    test(`THEN the state should be as expected`, () => {
      expect(store.getState()).toMatchInlineSnapshot(`
        Object {
          "error": null,
          "isFailure": false,
          "isPending": true,
          "isSuccess": false,
        }
      `);
    });
    test(`THEN the values passed into the execute function should be as expected`, () => {
      expect(mockExecute.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "value passed in to load (which will then be passed to execute)",
          ],
        ]
      `);
    });
    describe(`AND loading succeeds`, () => {
      beforeEach(() => {
        act(() => {
          resolveLoad();
        });
      });
      test(`THEN the state should be as expected`, () => {
        expect(store.getState()).toMatchInlineSnapshot(`
          Object {
            "error": null,
            "isFailure": false,
            "isPending": false,
            "isSuccess": true,
          }
        `);
      });
    });
    describe(`AND loading fails`, () => {
      beforeEach(() => {
        act(() => {
          rejectLoad(new Error(`Test Error`));
        });
      });
      test(`THEN the state should be as expected`, () => {
        expect(store.getState()).toMatchInlineSnapshot(`
          Object {
            "error": [Error: Test Error],
            "isFailure": true,
            "isPending": false,
            "isSuccess": false,
          }
        `);
      });
    });
  });
});
