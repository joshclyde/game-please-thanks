import { combineReducers } from "redux";

import { reducers as authReducers } from "./auth/reducers";
import { reducers as designReducers } from "./design/reducers";
import { reducers as friendGroupsReducers } from "./friendGroups/reducers";
import { reducers as friendsReducers } from "./friends/reducers";
import { reducers as gameReducers } from "./games/reducers";
import { reducers as profileReducers } from "./profile/reducers";
import { reducers as settingsReducers } from "./settings/reducers";
import { shared } from "./shared/reducers";
import { reducers as statusReducers } from "./status/reducers";

// TODO: somehow connect reducers to RootState to ensure proper types
export const reducers = combineReducers({
  ...authReducers,
  ...designReducers,
  ...gameReducers,
  ...friendGroupsReducers,
  ...settingsReducers,
  ...friendsReducers,
  ...profileReducers,
  ...statusReducers,
  shared,
});
