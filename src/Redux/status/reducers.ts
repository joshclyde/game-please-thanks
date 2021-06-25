import { combineReducers } from "redux";

import { reducers as optimisticUpdateUserReducers } from "./optimisticUpdateUser/reducers";

const status = combineReducers({
  ...optimisticUpdateUserReducers,
});

export const reducers = { status };
