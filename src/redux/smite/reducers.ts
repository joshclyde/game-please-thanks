import {
  Actions,
  ActionSetSmiteSearchTerm,
  ActionSetBuildItemsFilter,
  SET_SMITE_SEARCH_TERM,
  SET_SMITE_BUILD_ITEMS_FILTER,
} from "./actions";
import { items, gods } from "./data";
import { SmiteState } from "./types";

const initialState: SmiteState = {
  items,
  gods,
  search: {
    term: "",
  },
  buildItems: {},
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

const reduceSetBuildItemsFilter = (
  state: SmiteState,
  { payload }: ActionSetBuildItemsFilter,
) => {
  const { key, filterName, value } = payload;
  return {
    ...state,
    buildItems: {
      ...state.buildItems,
      [key]: {
        ...state.buildItems[key],
        filters: {
          ...state.buildItems[key]?.filters,
          [filterName]: value,
        },
      },
    },
  };
};

export const smite = (state = initialState, action: Actions): SmiteState => {
  const { type } = action;
  switch (type) {
    case SET_SMITE_SEARCH_TERM:
      return reduceSetSearchTerm(state, action as ActionSetSmiteSearchTerm);
    case SET_SMITE_BUILD_ITEMS_FILTER:
      return reduceSetBuildItemsFilter(state, action as ActionSetBuildItemsFilter);
  }
  return state;
};
