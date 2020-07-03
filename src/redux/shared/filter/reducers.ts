import { Actions, ActionSetSharedFilter, SET_SHARED_FILTER } from "./actions";
import { SharedFilterState } from "./types";

const initialState: SharedFilterState = {};

const reduceSetSharedFilter = (
  state: SharedFilterState,
  { payload }: ActionSetSharedFilter,
) => {
  const { key, filterName, value } = payload;
  return {
    ...state,
    [key]: {
      ...state?.[key],
      [filterName]: value,
    },
  };
};

export const filter = (state = initialState, action: Actions): SharedFilterState => {
  const { type } = action;
  switch (type) {
    case SET_SHARED_FILTER:
      return reduceSetSharedFilter(state, action as ActionSetSharedFilter);
  }
  return state;
};
