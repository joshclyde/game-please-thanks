import _ from "lodash";

import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";
import { UserProfileGames } from "@Types";

const makeSelectProfileGamesOwned = () => (state: RootState): UserProfileGames => {
  const games = state.profile.games;
  const gamesOwned = _.pickBy(games, ({ isOwned }) => isOwned);
  return gamesOwned;
};

export const useSelectProfileGamesOwned = makeUseSelector(makeSelectProfileGamesOwned);

const makeSelectProfileGamesOwnedIds = () => (state: RootState) =>
  Object.keys(makeSelectProfileGamesOwned()(state));

export const useSelectProfileGamesOwnedIds = makeUseSelector(
  makeSelectProfileGamesOwnedIds,
);

const makeSelectProfileIsGameOwned = (gameId: string) => (state: RootState): boolean => {
  const gamesOwned = makeSelectProfileGamesOwned()(state);
  return Object.keys(gamesOwned).includes(gameId);
};

export const useSelectProfileIsGameOwned = makeUseSelector(makeSelectProfileIsGameOwned);
