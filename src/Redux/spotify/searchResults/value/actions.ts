import { SpotifySearchResponse } from "@Api";
import { makeAction } from "@ReduxUtils";

const {
  makeCase: makeCaseAddSpotifySearchResults,
  useDispatchAction: useAddSpotifySearchResults,
} = makeAction(
  `ADD_SPOTIFY_SEARCH_RESULTS`,
  (
    { term, type }: { term: string; type: "album" },
    searchResults: SpotifySearchResponse,
  ) => ({
    term,
    type,
    searchResults,
  }),
);

export { makeCaseAddSpotifySearchResults, useAddSpotifySearchResults };
