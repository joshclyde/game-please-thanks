import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

export const useSelectSpotifyPlayerIsLoading = makeUseSelector(() => (state: RootState) =>
  state.spotify.player.load.isPending,
);
export const useSelectSpotifyPlayerDidLoadSucceed = makeUseSelector(
  () => (state: RootState) => state.spotify.player.load.isSuccess,
);
export const useSelectSpotifyPlayerDidLoadFail = makeUseSelector(
  () => (state: RootState) => state.spotify.player.load.isFailure,
);
