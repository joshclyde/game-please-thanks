import _ from "lodash";

import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

const makeSelectProfileGamesOwned = () => (
  state: RootState,
): Record<string, { isOwned: boolean }> => {
  const games = state.profile.games;
  const gamesOwned = _.pickBy(games, ({ isOwned }) => isOwned);
  return gamesOwned;
};

export const useSelectProfileGamesOwned = makeUseSelector(makeSelectProfileGamesOwned);

const makeSelectProfileIsGameOwned = (gameId: string) => (state: RootState): boolean => {
  const gamesOwned = makeSelectProfileGamesOwned()(state);
  return Object.keys(gamesOwned).includes(gameId);
};

export const useSelectProfileIsGameOwned = makeUseSelector(makeSelectProfileIsGameOwned);
