import { makeReducer } from "@ReduxUtils";

import { makeCaseSetFriendGroup } from "./actions";
import { FriendGroupsState } from "./types";

const initialState: FriendGroupsState = {
  me: {
    id: `me`,
    name: `Friends`,
    friends: [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`],
  },
};
const { reducer: friendGroups, addCase } = makeReducer({ initialState });

addCase(
  makeCaseSetFriendGroup((state, { payload }) => {
    const { id } = payload;
    return {
      ...state,
      [id]: {
        ...state[id],
        ...payload,
      },
    };
  }),
);

export const reducers = { friendGroups };
