import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../types";

const makeSelectCurrentFriendGroupId = () => (state: RootState) =>
  state.settings.currentFriendGroupId;

export const useSelectCurrentFriendGroupId = makeUseSelector(
  makeSelectCurrentFriendGroupId,
);
