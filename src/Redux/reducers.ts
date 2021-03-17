import { combineReducers } from "redux";

import { reducers as authReducers } from "./auth/reducers";
import { reducers as designReducers } from "./design/reducers";
import { flashcard } from "./flashcard/reducers";
import { schedule } from "./schedule/reducers";
import { shared } from "./shared/reducers";
import { smite } from "./smite/reducers";
import { reducers as spotifyReducers } from "./spotify/reducers";

export const reducers = combineReducers({
  ...authReducers,
  ...designReducers,
  ...spotifyReducers,
  flashcard,
  smite,
  schedule,
  shared,
});
