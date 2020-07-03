import { BuildItems } from "./types";

export const SET_SMITE_SEARCH_TERM = "SET_SMITE_SEARCH_TERM";
export const makeActionSetSmiteSearchTerm = (searchTerm: string) => ({
  type: SET_SMITE_SEARCH_TERM,
  payload: {
    searchTerm,
  },
});
export type ActionSetSmiteSearchTerm = ReturnType<typeof makeActionSetSmiteSearchTerm>;

export const SET_SMITE_BUILD_ITEMS_FILTER = "SET_SMITE_BUILD_ITEMS_FILTER";
export const makeActionSetBuildItemsFilter = (
  key: string,
  filterName: keyof BuildItems["filters"],
  value: boolean,
) => ({
  type: SET_SMITE_BUILD_ITEMS_FILTER,
  payload: {
    key,
    filterName,
    value,
  },
});

export type ActionSetBuildItemsFilter = ReturnType<typeof makeActionSetBuildItemsFilter>;

export type Actions = ActionSetSmiteSearchTerm | ActionSetBuildItemsFilter;
