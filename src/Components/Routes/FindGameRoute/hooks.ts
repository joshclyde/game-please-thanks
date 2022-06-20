import pickBy from "lodash/pickBy";

import { useSelectFormValues, useSelectFormInputValue } from "@Redux";
import { useGames, useUsers } from "@State";

export const useCheckedFriendsIds = () => {
  const formState = useSelectFormValues(`FIND_GAME_ROUTE`);
  const friendIds = Object.keys(
    pickBy(formState, (isChecked, id) => isChecked && id !== `INCLUDE_GAME_PASS`),
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
  allUsers: ReturnType<typeof useUsers>,
  allGames: ReturnType<typeof useGames>,
  shouldIncludeGamePass: boolean,
) => {
  const friends = pickBy(allUsers, (_value, userId) => friendIds.includes(userId));
  const doAllFriendsHaveGamePass = !Object.values(friends).some(
    (friend) => !friend.hasGamePass,
  );
  const games = pickBy(
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
  const allUsers = useUsers();
  const games = useGames();
  return getGameIds(friendIds, allUsers, games, shouldIncludeGamePass);
};
