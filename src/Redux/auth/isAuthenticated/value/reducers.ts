import { makeReducer } from "@ReduxUtils";

import { makeCaseSetIsAuthenticated } from "./actions";

const { reducer: value, addCase } = makeReducer<boolean | null>({
  initialState: null,
});
addCase(makeCaseSetIsAuthenticated((_state, action) => action.payload.value));

export const reducers = { value };
