import { makeReducer } from "@ReduxUtils";

import { makeCaseSetGame, makeCaseSetGamesValue } from "./actions";
import { ValueState } from "./types";

const initialState: ValueState = {};
const { reducer: value, addCase } = makeReducer({ initialState });

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

addCase(
  makeCaseSetGamesValue((state, { payload }) => {
    return payload;
  }),
);

export const reducers = { value };
