import { makeAction } from "@ReduxUtils";

import { FriendGroup } from "./types";

const {
  makeCase: makeCaseSetFriendGroup,
  useDispatchAction: useSetFriendGroup,
} = makeAction(`SET_FRIEND_GROUP`, (friendGroup: FriendGroup) => ({
  ...friendGroup,
}));

export { makeCaseSetFriendGroup, useSetFriendGroup };
