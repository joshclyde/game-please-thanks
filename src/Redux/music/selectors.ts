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

const FETCH_SPOTIFY_DEVICES_ID = `FETCH_SPOTIFY_DEVICES_ID`;
export const selectSpotifyDevicesIsLoading = (state: State) =>
  selectSharedIsLoading(state, FETCH_SPOTIFY_DEVICES_ID);

export const selectSpotifyDevicesIsLoadSuccessful = (state: State) =>
  selectSharedIsLoadSuccessful(state, FETCH_SPOTIFY_DEVICES_ID);

export const selectSpotifyDevicesIsLoadFailure = (state: State) =>
  selectSharedIsLoadFailure(state, FETCH_SPOTIFY_DEVICES_ID);

export const selectSpotifyDevicesIsLoadAttempted = (state: State) =>
  selectSpotifyDevicesIsLoading(state) ||
  selectSpotifyDevicesIsLoadSuccessful(state) ||
  selectSpotifyDevicesIsLoadFailure(state);

export const selectSpotifyDevicesLoadingState = (state: State) => ({
  isLoading: selectSpotifyDevicesIsLoading(state),
  isLoadSuccessful: selectSpotifyDevicesIsLoadSuccessful(state),
  isLoadFailure: selectSpotifyDevicesIsLoadFailure(state),
  isLoadAttempted: selectSpotifyDevicesIsLoadAttempted(state),
});

export const selectSpotifyDevices = (state: State) => state.music.spotify.devices;

export const selectSpotifyThisDeviceId = (state: State) =>
  state.music.spotify?.devices.find(({ name }) => name === `Jams Tree`)?.id;
// state.music.spotify?.devices.find(({ name }) => name === `iPhone`)?.id;
