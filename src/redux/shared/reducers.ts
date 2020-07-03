import { SharedState } from "./types";
import { filter } from "./filter/reducers";

const initialState: SharedState = {
  filter: {},
};

export const shared = (state = initialState, action: any): SharedState => {
  return {
    ...state,
    filter: filter(state.filter, action),
  };
};
