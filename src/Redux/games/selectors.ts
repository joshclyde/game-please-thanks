import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../types";

const makeSelectDoesGameExist = (gameId: string) => (state: RootState) =>
  Boolean(state.games?.[gameId]);

export const useSelectDoesGameExist = makeUseSelector(makeSelectDoesGameExist);

const makeSelectGame = (gameId: string) => (state: RootState) => state.games?.[gameId];

export const useSelectGame = makeUseSelector(makeSelectGame);
