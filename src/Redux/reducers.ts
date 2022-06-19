import { combineReducers } from "redux";

import { reducers as authReducers } from "./auth/reducers";
import { reducers as designReducers } from "./design/reducers";
import { reducers as settingsReducers } from "./settings/reducers";
import { shared } from "./shared/reducers";
import { reducers as statusReducers } from "./status/reducers";
import { reducers as usersReducers } from "./users/reducers";

// TODO: somehow connect reducers to RootState to ensure proper types
export const reducers = combineReducers({
  ...authReducers,
  ...designReducers,
  ...settingsReducers,
  ...statusReducers,
  ...usersReducers,
  shared,
});
