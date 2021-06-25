import _ from "lodash";

import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";
import { UserProfileFriends } from "@Types";

import { makeSelectAllUsers } from "../../users/selectors";

const makeSelectUserProfileFriends = () => (state: RootState): UserProfileFriends =>
  _.pickBy(state.profile.friends, ({ isFriend }) => isFriend);

export const useSelectUserProfileFriends = makeUseSelector(makeSelectUserProfileFriends);

const makeSelectFriendsIds = () => (state: RootState) =>
  Object.keys(makeSelectUserProfileFriends()(state));

export const useSelectFriendsIds = makeUseSelector(makeSelectFriendsIds);

const makeSelectFriends = () => (state: RootState) => {
  const friendIds = makeSelectFriendsIds()(state);
  const users = makeSelectAllUsers()(state);
  const friends = _.pickBy(users, (_user, userId) => friendIds.includes(userId));
  return friends;
};

export const useSelectFriends = makeUseSelector(makeSelectFriends);

const makeSelectFriendsIdsSorted = () => (state: RootState) => {
  const friends = makeSelectFriends()(state);
  return Object.keys(friends).sort((friendId1, friendId2) => {
    return friends[friendId1].name.localeCompare(friends[friendId2].name);
  });
};

export const useSelectFriendIdsSorted = makeUseSelector(makeSelectFriendsIdsSorted);

const makeSelectCurrentFriendIdsThatOwnGame = (gameId: string) => (state: RootState) => {
  const friendIds = makeSelectFriendsIds()(state);
  const users = makeSelectAllUsers()(state);
  const friends = _.pickBy(
    users,
    (user, userId) =>
      Boolean(user.games?.[gameId]?.isOwned) && friendIds.includes(userId),
  );
  return Object.keys(friends);
};

export const useSelectCurrentFriendIdsThatOwnGame = makeUseSelector(
  makeSelectCurrentFriendIdsThatOwnGame,
);
