import { combineReducers } from "redux";

import { reducers as authReducers } from "./auth/reducers";
import { reducers as designReducers } from "./design/reducers";
import { schedule } from "./schedule/reducers";
import { shared } from "./shared/reducers";
import { reducers as spotifyReducers } from "./spotify/reducers";

// TODO: somehow connect reducers to RootState to ensure proper types
export const reducers = combineReducers({
  ...authReducers,
  ...designReducers,
  ...spotifyReducers,
  schedule,
  shared,
});
