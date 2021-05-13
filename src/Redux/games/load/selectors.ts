import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

export const useSelectIsLoadingGames = makeUseSelector(() => (state: RootState) =>
  state.games.load.isPending,
);
export const useSelectDidGamesLoadSucceed = makeUseSelector(() => (state: RootState) =>
  state.games.load.isSuccess,
);
export const useSelectDidGamesLoadFail = makeUseSelector(() => (state: RootState) =>
  state.games.load.isFailure,
);
