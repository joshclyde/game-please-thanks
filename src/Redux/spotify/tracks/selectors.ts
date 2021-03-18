import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

export const useSelectSpotifyTrackName = makeUseSelector(
  (trackId: string) => (state: RootState) => {
    return state.spotify.tracks[trackId]?.name;
  },
);

export const useSelectSpotifyTrackLengthPrettified = makeUseSelector(
  (trackId: string) => (state: RootState) => {
    // TODO: unit tests around this
    const ms = state.spotify.tracks[trackId]?.duration_ms;
    const msMinutes = ms - (ms % 60000);
    const msSeconds = ms - msMinutes - ((ms - msMinutes) % 1000);
    const seconds = msSeconds / 1000;
    const minutes = msMinutes / 60000;
    return `${minutes}:${seconds}`;
  },
);

export const useSelectArtistNameForTrack = makeUseSelector(
  (trackId: string) => (state: RootState) => {
    return state.spotify.tracks[trackId]?.artists[0].name;
  },
);

export const useSelectImageUrlForTrack = makeUseSelector(
  (trackId: string) => (state: RootState) => {
    return state.spotify.tracks[trackId]?.album.images[1].url;
  },
);
