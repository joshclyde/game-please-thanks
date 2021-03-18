import { combineReducers } from "redux";

import { reducers as devicesReducers } from "./devices/reducers";
import { reducers as playerReducers } from "./player/reducers";
import { reducers as searchResultsReducers } from "./searchResults/reducers";
import { reducers as simplifiedAlbumsReducers } from "./simplifiedAlbums/reducers";
import { reducers as spotifyAccessTokenReducers } from "./spotifyAccessToken/reducers";

const spotify = combineReducers({
  ...devicesReducers,
  ...searchResultsReducers,
  ...spotifyAccessTokenReducers,
  ...playerReducers,
  ...simplifiedAlbumsReducers,
});

export const reducers = {
  spotify,
};
