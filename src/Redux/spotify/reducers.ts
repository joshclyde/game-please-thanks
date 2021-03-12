import { combineReducers } from "redux";

import { reducers as devicesReducers } from "./devices/reducers";
import { reducers as searchResultsReducers } from "./searchResults/reducers";
import { reducers as spotifyAccessTokenReducers } from "./spotifyAccessToken/reducers";

const spotify = combineReducers({
  ...devicesReducers,
  ...searchResultsReducers,
  ...spotifyAccessTokenReducers,
});

export const reducers = {
  spotify,
};
