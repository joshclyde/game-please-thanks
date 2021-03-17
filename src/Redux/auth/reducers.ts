import { combineReducers } from "redux";

import { reducers as isAuthenticatedReducers } from "./isAuthenticated/reducers";

const auth = combineReducers({
  ...isAuthenticatedReducers,
});

export const reducers = { auth };
