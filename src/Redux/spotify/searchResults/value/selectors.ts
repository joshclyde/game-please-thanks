import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../../types";
import { SearchAttributes } from "../types";

export const useSelectSpotifySearchResultsNumberOfAlbums = makeUseSelector(
  ({ term, type }: SearchAttributes) => (state: RootState) =>
    Object.keys(state.spotify.searchResults.value[`${type}-${term}`] || {}).length,
);

export const useSelectSpotifySearchResultsAlbumName = makeUseSelector(
  ({ term, type }: SearchAttributes, index: number) => (state: RootState) => {
    const id = state.spotify.searchResults.value[`${type}-${term}`]?.[index];
    return state.spotify.simplifiedAlbums[id]?.name;
  },
);

export const useSelectSpotifySearchResultsAlbumArtistName = makeUseSelector(
  ({ term, type }: SearchAttributes, index: number) => (state: RootState) => {
    const id = state.spotify.searchResults.value[`${type}-${term}`]?.[index];
    return state.spotify.simplifiedAlbums[id]?.artists[0].name;
  },
);

export const useSelectSpotifySearchResultsAlbumImageUrl = makeUseSelector(
  ({ term, type }: SearchAttributes, index: number) => (state: RootState) => {
    const id = state.spotify.searchResults.value[`${type}-${term}`]?.[index];
    return state.spotify.simplifiedAlbums[id]?.images[1].url;
  },
);

export const useSelectSpotifySearchResultsNumberOfTracks = makeUseSelector(
  ({ term, type }: SearchAttributes) => (state: RootState) =>
    Object.keys(state.spotify.searchResults.value[`${type}-${term}`] || {}).length,
);

export const useSelectSpotifySearchResultsTrackIds = makeUseSelector(
  ({ term, type }: SearchAttributes) => (state: RootState) =>
    Object.values(state.spotify.searchResults.value[`${type}-${term}`] || {}),
);
