import {
  Actions,
  ActionSetSmiteSearchTerm,
  ActionSetBuildItemsFilter,
  ActionSetBuildAGodGodName,
  ActionCreateBuildAGod,
  ActionSetBuildAGodLevel,
  ActionSetBuildAGodItem,
  ActionSetBuildAGodView,
  SET_SMITE_SEARCH_TERM,
  SET_SMITE_BUILD_A_GOD_GOD_NAME,
  SET_SMITE_BUILD_A_GOD_LEVEL,
  SET_SMITE_BUILD_ITEMS_FILTER,
  SET_SMITE_BUILD_A_GOD_ITEM,
  CREATE_SMITE_BUILD_A_GOD,
  SET_SMITE_BUILD_A_GOD_VIEW,
} from "./actions";
import { items, gods } from "./data";
import { SmiteState, BuildAGod } from "./types";

const initialState: SmiteState = {
  items,
  gods,
  search: {
    term: "",
  },
  buildItems: {},
  buildAGod: {},
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

const reduceCreateBuildAGod = (state: SmiteState, { payload }: ActionCreateBuildAGod) => {
  const { key } = payload;
  const keyObject: BuildAGod = { godName: undefined, level: 1, items: [], view: "god" };
  return {
    ...state,
    buildAGod: {
      ...state.buildAGod,
      [key]: keyObject,
    },
  };
};

const reduceSetBuildAGodGodName = (
  state: SmiteState,
  { payload }: ActionSetBuildAGodGodName,
) => {
  const { key, godName } = payload;
  return {
    ...state,
    buildAGod: {
      ...state.buildAGod,
      [key]: {
        ...state.buildAGod[key],
        godName,
      },
    },
  };
};

const reduceSetBuildAGodLevel = (
  state: SmiteState,
  { payload }: ActionSetBuildAGodLevel,
) => {
  const { key, level } = payload;
  return {
    ...state,
    buildAGod: {
      ...state.buildAGod,
      [key]: {
        ...state.buildAGod[key],
        level,
      },
    },
  };
};

const reduceSetBuildAGodItem = (
  state: SmiteState,
  { payload }: ActionSetBuildAGodItem,
) => {
  const { key, index, itemId } = payload;
  const items = [...state.buildAGod[key].items];
  items[index] = itemId;
  return {
    ...state,
    buildAGod: {
      ...state.buildAGod,
      [key]: {
        ...state.buildAGod[key],
        items,
      },
    },
  };
};

const reduceSetBuildAGodView = (
  state: SmiteState,
  { payload }: ActionSetBuildAGodView,
) => {
  const { key, view } = payload;
  return {
    ...state,
    buildAGod: {
      ...state.buildAGod,
      [key]: {
        ...state.buildAGod[key],
        view,
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
    case CREATE_SMITE_BUILD_A_GOD:
      return reduceCreateBuildAGod(state, action as ActionCreateBuildAGod);
    case SET_SMITE_BUILD_A_GOD_GOD_NAME:
      return reduceSetBuildAGodGodName(state, action as ActionSetBuildAGodGodName);
    case SET_SMITE_BUILD_A_GOD_LEVEL:
      return reduceSetBuildAGodLevel(state, action as ActionSetBuildAGodLevel);
    case SET_SMITE_BUILD_A_GOD_ITEM:
      return reduceSetBuildAGodItem(state, action as ActionSetBuildAGodItem);
    case SET_SMITE_BUILD_A_GOD_VIEW:
      return reduceSetBuildAGodView(state, action as ActionSetBuildAGodView);
  }
  return state;
};
