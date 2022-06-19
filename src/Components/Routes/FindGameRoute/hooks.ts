import _ from "lodash";

import { useSelectAllUsers, useSelectFormValues, useSelectFormInputValue } from "@Redux";
import { useGames } from "@State";

export const useCheckedFriendsIds = () => {
  const formState = useSelectFormValues(`FIND_GAME_ROUTE`);
  const friendIds = Object.keys(
    _.pickBy(formState, (isChecked, id) => isChecked && id !== `INCLUDE_GAME_PASS`),
  );
  return friendIds;
};

const useShouldIncludeGamePass = () => {
  const shouldIncludeGamePass = useSelectFormInputValue(
    `FIND_GAME_ROUTE`,
    `INCLUDE_GAME_PASS`,
  );
  return Boolean(shouldIncludeGamePass);
};

export const getGameIds = (
  friendIds: ReturnType<typeof useCheckedFriendsIds>,
  allUsers: ReturnType<typeof useSelectAllUsers>,
  allGames: ReturnType<typeof useGames>,
  shouldIncludeGamePass: boolean,
) => {
  const friends = _.pickBy(allUsers, (_value, userId) => friendIds.includes(userId));
  const doAllFriendsHaveGamePass = !Object.values(friends).some(
    (friend) => !friend.hasGamePass,
  );
  const games = _.pickBy(
    allGames,
    (game) =>
      (shouldIncludeGamePass && doAllFriendsHaveGamePass && game.isOnGamePass) ||
      !Object.values(friends).some((user) => !user.games[game.id]?.isOwned),
  );
  return friendIds.length === 0 ? [] : Object.keys(games);
};

export const useGameIds = () => {
  const friendIds = useCheckedFriendsIds();
  const shouldIncludeGamePass = useShouldIncludeGamePass();
  const allUsers = useSelectAllUsers();
  const games = useGames();
  return getGameIds(friendIds, allUsers, games, shouldIncludeGamePass);
};
