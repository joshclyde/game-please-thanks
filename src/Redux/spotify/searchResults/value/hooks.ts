import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../../types";

export const useSelectSpotifySearchResultsNumberOfAlbums = makeUseSelector(
  (entryId: string) => (state: RootState) =>
    state.spotify.searchResults.value[entryId]?.albums.items.length,
);

export const useSelectSpotifySearchResultsAlbumName = makeUseSelector(
  (entryId: string, index: number) => (state: RootState) =>
    state.spotify.searchResults.value[entryId]?.albums.items?.[index].name,
);

export const useSelectSpotifySearchResultsAlbumArtistName = makeUseSelector(
  (entryId: string, index: number) => (state: RootState) =>
    state.spotify.searchResults.value[entryId]?.albums.items?.[index].artists[0].name,
);

export const useSelectSpotifySearchResultsAlbumImageUrl = makeUseSelector(
  (entryId: string, index: number) => (state: RootState) =>
    state.spotify.searchResults.value[entryId]?.albums.items?.[index].images[1].url,
);

export { useAddSpotifySearchResults, useSelectSpotifySearchResults } from "./_root";
