import { createStore } from "redux";

import { reducers } from "../";

describe(`GIVEN a redux store with the reducers`, () => {
  let store: ReturnType<typeof createStore>;
  beforeEach(() => {
    store = createStore(reducers);
  });
  test(`THEN the initial state should be as expected`, () => {
    expect(store.getState()).toMatchSnapshot();
  });
});
