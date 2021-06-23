import { combineReducers } from "redux";

import { reducers as friendsReducers } from "./friends/reducers";
import { reducers as gameReducers } from "./games/reducers";
import { reducers as hasGamePassReducers } from "./hasGamePass/reducers";
import { reducers as nameReducers } from "./name/reducers";
import { reducers as uidReducers } from "./uid/reducers";

const profile = combineReducers({
  ...uidReducers,
  ...hasGamePassReducers,
  ...nameReducers,
  ...gameReducers,
  ...friendsReducers,
});

export const reducers = { profile };
