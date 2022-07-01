import { combineReducers } from "redux";

import { reducers as designReducers } from "./design/reducers";
import { shared } from "./shared/reducers";

// TODO: somehow connect reducers to RootState to ensure proper types
export const reducers = combineReducers({
  ...designReducers,
  shared,
});
