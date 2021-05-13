import { makeReducer } from "@ReduxUtils";

import { makeCaseSetFriend } from "./actions";
import { FriendsState } from "./types";

const initialState: FriendsState = {
  a: {
    id: `a`,
    name: `Josh`,
    gamesOwned: [`C2MHS238PDNS`],
    hasGamePass: true,
    imageUrl: `/assets/joshwah.jpg`,
  },
  b: {
    id: `b`,
    name: `Bingle Bear`,
    gamesOwned: [`C2MHS238PDNS`],
    hasGamePass: true,
  },
  c: {
    id: `c`,
    name: `Ryan`,
    gamesOwned: [`C2MHS238PDNS`],
    hasGamePass: true,
  },
  d: {
    id: `d`,
    name: `Nate`,
    gamesOwned: [`C2MHS238PDNS`],
    hasGamePass: false,
  },
  e: {
    id: `e`,
    name: `Patrick`,
    gamesOwned: [`C2MHS238PDNS`],
    hasGamePass: false,
  },
  f: {
    id: `f`,
    name: `Adam`,
    gamesOwned: [`C2MHS238PDNS`],
    hasGamePass: true,
  },
  g: {
    id: `g`,
    name: `Amy`,
    gamesOwned: [`C2MHS238PDNS`],
    hasGamePass: false,
  },
  h: {
    id: `h`,
    name: `Trevor`,
    gamesOwned: [`C2MHS238PDNS`],
    hasGamePass: false,
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
