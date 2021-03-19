import { TrackObject } from "@Api";
import { makeReducer } from "@ReduxUtils";

import { makeCaseAddSpotifySearchResults } from "../searchResults/value/actions";

type TrackObjects = Record<string, TrackObject>;

const { reducer: tracks, addCase } = makeReducer<TrackObjects>({
  initialState: {},
});
addCase(
  makeCaseAddSpotifySearchResults((state, action) => {
    const tracks = action.payload.searchResults.tracks?.items || [];
    // TODO: normalize these even more (e.g. has SimplifiedAlbum inside of it)
    const newTrackObjects = tracks.reduce((accumulated: TrackObjects, track) => {
      accumulated[track.id] = track;
      return accumulated;
    }, {});
    return {
      ...state,
      ...newTrackObjects,
    };
  }),
);

export const reducers = { tracks };
