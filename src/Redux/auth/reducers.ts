import { combineReducers } from "redux";

import { reducers as isAuthenticatedReducers } from "./isAuthenticated/reducers";
import { reducers as uidReducers } from "./uid/reducers";

const auth = combineReducers({
  ...isAuthenticatedReducers,
  ...uidReducers,
});

export const reducers = { auth };
