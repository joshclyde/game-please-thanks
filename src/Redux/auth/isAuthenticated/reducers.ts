import { makeReducer, makeCaseSetValue } from "@ReduxUtils";

import { isSetIsAuthenticated } from "./actions";

const reducer = makeReducer({ initialState: false });
reducer.addCase(makeCaseSetValue(isSetIsAuthenticated));

export const reducers = { isAuthenticated: reducer };
