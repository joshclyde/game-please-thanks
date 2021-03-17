import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../../../types";

export const useSelectIsSpotifyPlayLoading = makeUseSelector(() => (state: RootState) =>
  state.spotify.player.play.load.isPending,
);
export const useSelectDidSpotifyPlaySucceed = makeUseSelector(() => (state: RootState) =>
  state.spotify.player.play.load.isSuccess,
);
export const useSelectDidSpotifyPlayFail = makeUseSelector(() => (state: RootState) =>
  state.spotify.player.play.load.isFailure,
);
