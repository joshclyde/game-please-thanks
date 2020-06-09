import { Actions, ActionSetSmiteSearchTerm, SET_SMITE_SEARCH_TERM } from "./actions";
import { items, gods } from "./data";
import { SmiteState } from "./types";

const initialState: SmiteState = {
  items,
  gods,
  search: {
    term: "",
  },
};

const reduceSetSearchTerm = (
  state: SmiteState,
  { payload }: ActionSetSmiteSearchTerm,
) => {
  const { searchTerm } = payload;
  return {
    ...state,
    search: {
      ...state.search,
      term: searchTerm,
    },
  };
};

export const smite = (state = initialState, action: Actions): SmiteState => {
  const { type } = action;
  switch (type) {
    case SET_SMITE_SEARCH_TERM:
      return reduceSetSearchTerm(state, action as ActionSetSmiteSearchTerm);
  }
  return state;
};
