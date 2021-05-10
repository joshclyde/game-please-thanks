import { makeUseSelector } from "@ReduxUtils";

import { useSelectCurrentFriendGroupId } from "../settings/hooks";
import { RootState } from "../types";

const makeSelectFriendGroupGameIds = (friendGroupId: string) => (state: RootState) =>
  state.friendGroups[friendGroupId]?.games;

export const useSelectFriendGroupGameIds = makeUseSelector(makeSelectFriendGroupGameIds);

export const useSelectCurrentFriendGroupGameIds = () => {
  const groupId = useSelectCurrentFriendGroupId();
  const gameIds = useSelectFriendGroupGameIds(groupId);
  return gameIds;
};
