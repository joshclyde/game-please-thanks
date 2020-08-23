import { BuildItems, BuildAGod } from "./types";

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

export const CREATE_SMITE_BUILD_A_GOD = "CREATE_SMITE_BUILD_A_GOD";
export const makeActionCreateSmiteBuildAGod = (key: string) => ({
  type: CREATE_SMITE_BUILD_A_GOD,
  payload: {
    key,
  },
});

export type ActionCreateBuildAGod = ReturnType<typeof makeActionCreateSmiteBuildAGod>;

export const SET_SMITE_BUILD_A_GOD_GOD_NAME = "SET_SMITE_BUILD_A_GOD_GOD_NAME";
export const makeActionSetBuildAGodGodName = (key: string, godName: string) => ({
  type: SET_SMITE_BUILD_A_GOD_GOD_NAME,
  payload: {
    key,
    godName,
  },
});

export type ActionSetBuildAGodGodName = ReturnType<typeof makeActionSetBuildAGodGodName>;

export const SET_SMITE_BUILD_A_GOD_LEVEL = "SET_SMITE_BUILD_A_GOD_LEVEL";
export const makeActionSetBuildAGodLevel = (key: string, level: number) => ({
  type: SET_SMITE_BUILD_A_GOD_LEVEL,
  payload: {
    key,
    level,
  },
});

export type ActionSetBuildAGodLevel = ReturnType<typeof makeActionSetBuildAGodLevel>;

export const SET_SMITE_BUILD_A_GOD_ITEM = "SET_SMITE_BUILD_A_GOD_ITEM";
export const makeActionSetBuildAGodItem = (
  key: string,
  index: number,
  itemId: number,
) => ({
  type: SET_SMITE_BUILD_A_GOD_ITEM,
  payload: {
    key,
    index,
    itemId,
  },
});

export type ActionSetBuildAGodItem = ReturnType<typeof makeActionSetBuildAGodItem>;

export const SET_SMITE_BUILD_A_GOD_VIEW = "SET_SMITE_BUILD_A_GOD_VIEW";
export const makeActionSetBuildAGodView = (key: string, view: BuildAGod["view"]) => ({
  type: SET_SMITE_BUILD_A_GOD_VIEW,
  payload: {
    key,
    view,
  },
});

export type ActionSetBuildAGodView = ReturnType<typeof makeActionSetBuildAGodView>;

export type Actions =
  | ActionSetSmiteSearchTerm
  | ActionSetBuildItemsFilter
  | ActionSetBuildAGodGodName
  | ActionSetBuildAGodItem
  | ActionSetBuildAGodLevel
  | ActionSetBuildAGodView;
