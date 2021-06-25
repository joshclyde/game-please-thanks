import { makeUseSelector } from "@ReduxUtils";

import { useSelectFriends } from "../../profile/friends/selectors";
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

const makeSelectGameImage = (gameId: string) => (state: RootState) =>
  state.games.value?.[gameId].images.TitledLong.url;

export const useSelectGameImage = makeUseSelector(makeSelectGameImage);

const makeSelectExternalUrl = (gameId: string) => (state: RootState) =>
  state.games.value?.[gameId].externalUrl;

export const useSelectExternalUrl = makeUseSelector(makeSelectExternalUrl);

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
  const friends = useSelectFriends();
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
    if (
      ownedByFriend &&
      !Object.values(friends).some((friend) => friend.games?.[gameId]?.isOwned)
    ) {
      return false;
    }
    if (isOnGamePass && !game.isOnGamePass) {
      return false;
    }
    return true;
  });
};
