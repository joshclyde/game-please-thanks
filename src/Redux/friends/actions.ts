import { makeAction } from "@ReduxUtils";

import { Friend } from "./types";

const { makeCase: makeCaseSetFriend, useDispatchAction: useSetFriend } = makeAction(
  `SET_FRIEND`,
  (friend: Friend) => ({
    ...friend,
  }),
);

export { makeCaseSetFriend, useSetFriend };
