import _ from "lodash";

import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

import {
  makeSelectUserName,
  makeSelectUserHasGamePass,
  makeSelectUserGamesOwnedIds,
  makeSelectUserFriends,
  makeSelectUserFriendsIds,
  makeSelectUserIsGameOwned,
} from "../users/selectors";

import { makeSelectUid } from "./uid/selectors";

/*
  name
*/
const makeSelectAuthName = () => (state: RootState) => {
  const uid = makeSelectUid()(state);
  return uid ? makeSelectUserName(uid)(state) : null;
};

export const useSelectAuthName = makeUseSelector(makeSelectAuthName);

/*
  hasGamePass
*/
const makeSelectAuthHasGamePass = () => (state: RootState) => {
  const uid = makeSelectUid()(state);
  return uid ? makeSelectUserHasGamePass(uid)(state) : null;
};

export const useSelectAuthHasGamePass = makeUseSelector(makeSelectAuthHasGamePass);

/*
  games
*/
const makeSelectAuthGamesOwnedIds = () => (state: RootState) => {
  const uid = makeSelectUid()(state);
  return uid ? makeSelectUserGamesOwnedIds(uid)(state) : null;
};

export const useSelectProfileGamesOwnedIds = makeUseSelector(makeSelectAuthGamesOwnedIds);

const makeSelectAuthIsGameOwned = (gameId: string) => (state: RootState) => {
  const uid = makeSelectUid()(state);
  return uid ? makeSelectUserIsGameOwned(uid, gameId)(state) : null;
};

export const useSelectAuthIsGameOwned = makeUseSelector(makeSelectAuthIsGameOwned);

/*
  friends
*/
const makeSelectAuthFriends = () => (state: RootState) => {
  const uid = makeSelectUid()(state);
  return uid ? makeSelectUserFriends(uid)(state) : null;
};

export const useSelectAuthFriends = makeUseSelector(makeSelectAuthFriends);

const makeSelectAuthFriendsIds = () => (state: RootState) => {
  const uid = makeSelectUid()(state);
  return uid ? makeSelectUserFriendsIds(uid)(state) : null;
};

export const useSelectAuthFriendsIds = makeUseSelector(makeSelectAuthFriendsIds);

const makeSelectAuthFriendsIdsSorted = () => (state: RootState) => {
  const friends = makeSelectAuthFriends()(state);
  return friends
    ? Object.keys(friends).sort((friendId1, friendId2) => {
        return friends[friendId1].name.localeCompare(friends[friendId2].name);
      })
    : null;
};

export const useSelectAuthFriendIdsSorted = makeUseSelector(
  makeSelectAuthFriendsIdsSorted,
);

const makeSelectAuthFriendIdsThatOwnGame = (gameId: string) => (state: RootState) => {
  const friends = makeSelectAuthFriends()(state);
  const friendsThatOwnGame = _.pickBy(friends, (user) =>
    Boolean(user.games?.[gameId]?.isOwned),
  );
  return Object.keys(friendsThatOwnGame);
};

export const useSelectAuthFriendIdsThatOwnGame = makeUseSelector(
  makeSelectAuthFriendIdsThatOwnGame,
);
