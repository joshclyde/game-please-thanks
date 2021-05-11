import { makeUseSelector } from "@ReduxUtils";

import { useSelectCurrentFriendGroupId } from "../settings/hooks";
import { RootState } from "../types";

const makeSelectAllFriends = () => (state: RootState) => state.friends;

export const useSelectAllFriends = makeUseSelector(makeSelectAllFriends);

const makeSelectFriend = (friendId: string) => (state: RootState) =>
  state.friends[friendId];

export const useSelectFriend = makeUseSelector(makeSelectFriend);

const makeSelectFriendIdsForFriendGroup = (friendGroupId: string) => (state: RootState) =>
  state.friendGroups[friendGroupId].friends;

const useSelectFriendIdsForFriendGroup = makeUseSelector(
  makeSelectFriendIdsForFriendGroup,
);

const makeSelectFriendIdsThatOwnGame = (gameId: string, friendGroupId: string) => (
  state: RootState,
) => {
  const friendIdsInGroup = state.friendGroups[friendGroupId].friends;
  return Object.values(state.friends)
    .filter(
      (friend) =>
        friend.gamesOwned?.includes(gameId) && friendIdsInGroup.includes(friend.id),
    )
    .map(({ id }) => id);
};

export const useSelectFriendIdsThatOwnGame = makeUseSelector(
  makeSelectFriendIdsThatOwnGame,
);

export const useSelectCurrentFriendIdsThatOwnGame = (gameId: string) => {
  const friendGroupId = useSelectCurrentFriendGroupId();
  const friendIds = useSelectFriendIdsThatOwnGame(gameId, friendGroupId);
  return friendIds;
};

export const useSelectCurrentFriendIds = () => {
  const friendGroupId = useSelectCurrentFriendGroupId();
  const friendIds = useSelectFriendIdsForFriendGroup(friendGroupId);
  return friendIds;
};
