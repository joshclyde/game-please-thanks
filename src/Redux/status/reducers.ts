import { combineReducers } from "redux";

import { reducers as optimisticUpdateUserProfileReducers } from "./optimisticUpdateUserProfile/reducers";

const status = combineReducers({
  ...optimisticUpdateUserProfileReducers,
});

export const reducers = { status };
