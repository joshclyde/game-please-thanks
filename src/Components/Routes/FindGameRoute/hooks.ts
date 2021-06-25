import _ from "lodash";

import { useSelectAllGames, useSelectAllUsers, useSelectFormValues } from "@Redux";

export const useCheckedFriendsIds = () => {
  const formState = useSelectFormValues(`FIND_GAME_ROUTE`);
  const friendIds = Object.keys(_.pickBy(formState, (isChecked) => isChecked));
  return friendIds;
};

export const getGameIds = (
  friendIds: ReturnType<typeof useCheckedFriendsIds>,
  allUsers: ReturnType<typeof useSelectAllUsers>,
  allGames: ReturnType<typeof useSelectAllGames>,
) => {
  const friends = _.pickBy(allUsers, (_value, userId) => friendIds.includes(userId));
  const games = _.pickBy(
    allGames,
    (game) => !Object.values(friends).some((user) => !user.games[game.id]?.isOwned),
  );
  return friendIds.length === 0 ? [] : Object.keys(games);
};

export const useGameIds = () => {
  const friendIds = useCheckedFriendsIds();
  const allUsers = useSelectAllUsers();
  const allGames = useSelectAllGames();
  return getGameIds(friendIds, allUsers, allGames);
};
