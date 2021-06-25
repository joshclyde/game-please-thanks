import _ from "lodash";

import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../types";

const makeSelectUser = (userId: string) => (state: RootState) => state.users?.[userId];

export const useSelectUser = makeUseSelector(makeSelectUser);

export const makeSelectUserName = (userId: string) => (state: RootState) =>
  state.users[userId]?.name;

export const useSelectUserName = makeUseSelector(makeSelectUserName);

export const makeSelectUserHasGamePass = (userId: string) => (state: RootState) =>
  state.users[userId]?.hasGamePass;

export const useSelectUserHasGamePass = makeUseSelector(makeSelectUserHasGamePass);

export const makeSelectUserGames = (userId: string) => (state: RootState) =>
  state.users[userId]?.games;

export const useSelectUserGames = makeUseSelector(makeSelectUserGames);

export const makeSelectUserGamesOwnedIds = (userId: string) => (state: RootState) => {
  const games = makeSelectUserGames(userId)(state);
  return Object.keys(_.pickBy(games, ({ isOwned }) => isOwned));
};

export const useSelectUserGamesOwnedIds = makeUseSelector(makeSelectUserGamesOwnedIds);

export const makeSelectUserIsGameOwned = (userId: string, gameId: string) => (
  state: RootState,
) => Boolean(state.users[userId]?.games?.[gameId]?.isOwned);

export const useSelectUserIsGameOwned = makeUseSelector(makeSelectUserIsGameOwned);

export const makeSelectUserFriendsIds = (userId: string) => (state: RootState) =>
  Object.keys(_.pickBy(state.users[userId]?.friends, ({ isFriend }) => isFriend));

export const useSelectUserFriendsIds = makeUseSelector(makeSelectUserFriendsIds);

export const makeSelectUserFriends = (userId: string) => (state: RootState) => {
  const friendIds = makeSelectUserFriendsIds(userId)(state);
  return _.pickBy(state.users, (_user, userId) => friendIds.includes(userId));
};

export const useSelectUserFriends = makeUseSelector(makeSelectUserFriends);

export const makeSelectUserAndFriends = (userId: string) => (state: RootState) => {
  const friends = makeSelectUserFriends(userId)(state);
  const user = makeSelectUser(userId)(state);
  return {
    ...friends,
    [userId]: user,
  };
};

export const useSelectUserAndFriends = makeUseSelector(makeSelectUserAndFriends);

export const makeSelectAllUsers = () => (state: RootState) => state.users;

export const useSelectAllUsers = makeUseSelector(makeSelectAllUsers);
