import { makeReducer } from "@ReduxUtils";

import { makeCaseSetFriend } from "./actions";
import { FriendsState } from "./types";

const initialState: FriendsState = {
  a: {
    id: `a`,
    name: `Josh`,
    gamesOwned: [`1`, `2`, `3`, `4`],
    hasGamePass: true,
  },
  b: {
    id: `b`,
    name: `Bingle Bear`,
    gamesOwned: [`1`, `3`, `4`],
    hasGamePass: true,
  },
  c: {
    id: `c`,
    name: `Ryan`,
    gamesOwned: [`1`, `2`, `3`, `4`],
    hasGamePass: true,
  },
  d: {
    id: `d`,
    name: `Nate`,
    gamesOwned: [`2`, `3`, `4`],
    hasGamePass: true,
  },
};
const { reducer: friends, addCase } = makeReducer({ initialState });

addCase(
  makeCaseSetFriend((state, { payload }) => {
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

export const reducers = { friends };
