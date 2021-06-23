import _ from "lodash";

import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";
import { UserProfileFriends } from "@Types";

const makeSelectUserProfileFriends = () => (state: RootState): UserProfileFriends => {
  const friends = state.profile.friends;
  const friendsForReal = _.pickBy(friends, ({ isFriend }) => isFriend);
  return friendsForReal;
};

export const useSelectUserProfileFriends = makeUseSelector(makeSelectUserProfileFriends);

const makeSelectUserProfileFriendsIds = () => (state: RootState) =>
  Object.keys(makeSelectUserProfileFriends()(state));

export const useSelectUserProfileFriendsIds = makeUseSelector(
  makeSelectUserProfileFriendsIds,
);
