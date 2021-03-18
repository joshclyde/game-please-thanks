import { useCallback } from "react";

import { spotifySearch } from "@Api";
import { makeLoading } from "@ReduxUtils";

import { useSelectSpotifyAccessToken } from "../../spotifyAccessToken/hooks";
import { SearchAttributes } from "../types";
import { useAddSpotifySearchResults } from "../value/hooks";

const useExecute = () => {
  const accessToken = useSelectSpotifyAccessToken();
  const addSearchResults = useAddSpotifySearchResults();
  return useCallback(
    async ({ term, type }: SearchAttributes) => {
      const { data } = await spotifySearch({
        accessToken,
        q: term,
        limit: 10,
        market: `from_token`,
        type,
      });
      addSearchResults({ term, type }, data);
    },
    [accessToken, addSearchResults],
  );
};

const { reducers: load, useLoad: useLoadSpotifySearchResults } = makeLoading({
  useExecute,
  START: `START_LOADING_SPOTIFY_SEARCH_RESULTS`,
  SUCCESS: `SUCCESS_LOADING_SPOTIFY_SEARCH_RESULTS`,
  FAILURE: `FAILURE_LOADING_SPOTIFY_SEARCH_RESULTS`,
});

export const reducers = {
  load,
};

export { useLoadSpotifySearchResults };
