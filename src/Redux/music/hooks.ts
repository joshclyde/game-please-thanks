import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SpotifySearchResponse } from "@Api";

import { makeActionAddSpotifySearchResults } from "./actions";
import {
  makeSelectSpotifySearchResultsAlbum,
  makeSelectSpotifySearchResultsLength,
} from "./selectors";

export const useAddSpotifySearchResults = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id: string, searchResponse: SpotifySearchResponse) => {
      dispatch(makeActionAddSpotifySearchResults(id, searchResponse));
    },
    [dispatch],
  );
};

export const useSelectSpotifySearchResultsLength = (searchResultsKey: string) => {
  return useSelector(makeSelectSpotifySearchResultsLength(searchResultsKey));
};

export const useSelectSpotifySearchResultsAlbum = (
  searchResultsKey: string,
  index: number,
) => {
  return useSelector(makeSelectSpotifySearchResultsAlbum(searchResultsKey, index));
};
