import { makeReducer } from "@ReduxUtils";

import { makeCaseSetIsAuthenticated } from "./actions";

const { reducer: isAuthenticated, addCase } = makeReducer({ initialState: false });
addCase(makeCaseSetIsAuthenticated((_state, action) => action.payload.value));

export const reducers = { isAuthenticated };
