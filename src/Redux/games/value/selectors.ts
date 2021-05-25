import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

const makeSelectAllGames = () => (state: RootState) => state.games.value;

export const useSelectAllGames = makeUseSelector(makeSelectAllGames);

const makeSelectAllGameIds = () => (state: RootState) =>
  Object.keys(state.games?.value || {});

export const useSelectAllGameIds = makeUseSelector(makeSelectAllGameIds);

const makeSelectDoesGameExist = (gameId: string) => (state: RootState) =>
  Boolean(state.games.value?.[gameId]);

export const useSelectDoesGameExist = makeUseSelector(makeSelectDoesGameExist);

const makeSelectGame = (gameId: string) => (state: RootState) =>
  state.games.value?.[gameId];

export const useSelectGame = makeUseSelector(makeSelectGame);

export const useSelectFilteredGameIds = ({
  searchTerm,
  playerCount,
  ownedByFriend,
  isOnGamePass,
}: {
  searchTerm?: string;
  playerCount?: number;
  ownedByFriend?: boolean;
  isOnGamePass?: boolean;
}) => {
  const allGames = useSelectAllGames();
  return Object.keys(allGames).filter((gameId) => {
    const game = allGames[gameId];
    if (
      searchTerm != null &&
      !game.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    if (
      playerCount != null &&
      (playerCount < game.minPlayers || playerCount > game.maxPlayers)
    ) {
      return false;
    }
    return true;
  });
};
