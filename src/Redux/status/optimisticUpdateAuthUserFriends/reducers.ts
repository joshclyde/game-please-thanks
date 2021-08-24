import { combineReducers } from "redux";

import { statusReducer, errorReducer } from "./actions";

const optimisticUpdateAuthUserFriends = combineReducers({
  status: statusReducer,
  error: errorReducer,
});

export const reducers = { optimisticUpdateAuthUserFriends };
