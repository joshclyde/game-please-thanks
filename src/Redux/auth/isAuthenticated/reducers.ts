import { makeReducer2 } from "@ReduxUtils";

import { makeCaseSetIsAuthenticated } from "./actions";

const { reducer: isAuthenticated, addCase } = makeReducer2({ initialState: false });
addCase(makeCaseSetIsAuthenticated((_state, action) => action.payload.value));

export const reducers = { isAuthenticated };
