import {
  selectSharedIsLoading,
  selectSharedIsLoadSuccessful,
  selectSharedIsLoadFailure,
} from "../shared";
import { State } from "../types";

export type StateJustMusic = Pick<State, "music">;

export const selectSpotifyAccessToken = (state: StateJustMusic) =>
  state.music.spotifyAccessToken;

export const makeSelectSpotifySearchIsLoading = (searchResultsKey: string) => (
  state: State,
) => selectSharedIsLoading(state, searchResultsKey);

export const makeSelectSpotifySearchIsLoadSuccessful = (searchResultsKey: string) => (
  state: State,
) => selectSharedIsLoadSuccessful(state, searchResultsKey);

export const makeSelectSpotifySearchIsLoadFailure = (searchResultsKey: string) => (
  state: State,
) => selectSharedIsLoadFailure(state, searchResultsKey);

export const makeSelectSpotifySearchIsLoadAttempted = (searchResultsKey: string) => (
  state: State,
) =>
  makeSelectSpotifySearchIsLoading(searchResultsKey)(state) ||
  makeSelectSpotifySearchIsLoadSuccessful(searchResultsKey)(state) ||
  makeSelectSpotifySearchIsLoadFailure(searchResultsKey)(state);

export const makeSelectSpotifySearchResults = (searchResultsKey: string) => (
  state: State,
) => state.music.spotify.searchResults[searchResultsKey];

export const makeSelectSpotifySearchResultsLength = (searchResultsKey: string) => (
  state: State,
) => state.music.spotify.searchResults[searchResultsKey]?.albums.items.length;

export const makeSelectSpotifySearchResultsAlbum = (
  searchResultsKey: string,
  index: number,
) => (state: State) =>
  state.music.spotify.searchResults[searchResultsKey]?.albums.items[index];

export const makeSelectSpotifySearchResultsAlbumImageUrl = (
  searchResultsKey: string,
  index: number,
) => (state: State) =>
  state.music.spotify.searchResults[searchResultsKey]?.albums.items[index].images[0].url;
