import { combineReducers } from "redux";

import { reducers as optimisticUpdateAuthUserFriendsReducers } from "./optimisticUpdateAuthUserFriends/reducers";
import { reducers as optimisticUpdateUserReducers } from "./optimisticUpdateUser/reducers";

const status = combineReducers({
  ...optimisticUpdateUserReducers,
  ...optimisticUpdateAuthUserFriendsReducers,
});

export const reducers = { status };
