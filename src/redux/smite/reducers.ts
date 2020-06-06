import { items, gods } from "./data";
import { SmiteState } from "./types";

const initialState: SmiteState = {
  items,
  gods,
};

export const smite = (state = initialState): SmiteState => {
  return state;
};
