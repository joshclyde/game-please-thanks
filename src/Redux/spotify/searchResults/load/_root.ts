import { useCallback } from "react";

import { spotifySearch, SpotifySearchParams } from "@Api";
import { makeLoading } from "@ReduxUtils";

import { useSelectSpotifyAccessToken } from "../../spotifyAccessToken/hooks";
import { useAddSpotifySearchResults } from "../value/hooks";

const makeSpotifySearchResultsKey = ({
  q,
  type,
  market,
  limit,
  offset,
  include_external,
}: Omit<SpotifySearchParams, "accessToken">) => {
  return `${q}${type}${market}${limit}${offset}${include_external}`;
};

const useExecute = () => {
  const accessToken = useSelectSpotifyAccessToken();
  const addSearchResults = useAddSpotifySearchResults();
  return useCallback(
    async (searchTerm: string) => {
      const searchResultsKey = makeSpotifySearchResultsKey({
        q: searchTerm,
        limit: 10,
        market: `from_token`,
        type: `album`,
      });
      const { data } = await spotifySearch({
        accessToken,
        q: searchTerm,
        limit: 10,
        market: `from_token`,
        type: `album`,
      });
      addSearchResults(searchResultsKey, data);
    },
    [accessToken, addSearchResults],
  );
};

const { reducers: load, useLoad: useLoadSpotifySearchResults } = makeLoading({
  useExecute,
  START: `INITIATE_LOADING_SPOTIFY_SEARCH_RESULTS`,
  SUCCESS: `SUCCESS_LOADING_SPOTIFY_SEARCH_RESULTS`,
  FAILURE: `FAILURE_LOADING_SPOTIFY_SEARCH_RESULTS`,
});

export const reducers = {
  load,
};

export { useLoadSpotifySearchResults };
