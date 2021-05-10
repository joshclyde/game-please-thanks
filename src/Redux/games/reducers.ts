import { makeReducer } from "@ReduxUtils";

import { makeCaseSetGame } from "./actions";
import { GamesState } from "./types";

const initialState: GamesState = {
  "1": {
    id: `1`,
    name: `Overwatch`,
    minPlayers: 1,
    maxPlayers: 6,
    imageUrl: `/assets/overwatch.jpg`,
    isOnGamePass: false,
  },
  "2": {
    id: `2`,
    name: `Rocket League`,
    minPlayers: 1,
    maxPlayers: 8,
    imageUrl: `/assets/rocketleague.jpg`,
    isOnGamePass: true,
  },
  "3": {
    id: `3`,
    name: `Smite`,
    minPlayers: 1,
    maxPlayers: 5,
    imageUrl: `/assets/smite.jpg`,
    isOnGamePass: false,
  },
  "4": {
    id: `4`,
    name: `GTA V`,
    minPlayers: 1,
    maxPlayers: 10,
    imageUrl: `/assets/gtav.jpeg`,
    isOnGamePass: false,
  },
};
const { reducer: games, addCase } = makeReducer({ initialState });

addCase(
  makeCaseSetGame((state, { payload }) => {
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

export const reducers = { games };
