import { SpotifySearchResponse } from "@Api";
import { makeKeyValueFactory } from "@ReduxUtils";

import { RootState } from "../../../types";

const {
  reducer: value,
  useSetEntryValue: useAddSpotifySearchResults,
  useSelectEntryValue: useSelectSpotifySearchResults,
} = makeKeyValueFactory<RootState, SpotifySearchResponse>({
  actionIdentifier: `SPOTIFY_SEARCH_RESULTS`,
  selectStateFromRoot: (state) => state.spotify.searchResults.value,
});

export const reducers = { value };

export { useAddSpotifySearchResults, useSelectSpotifySearchResults };
