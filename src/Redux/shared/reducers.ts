import { filter } from "./filter/reducers";
import { forms } from "./forms/reducers";
import { loading } from "./loading/reducers";
import { SharedState } from "./types";

const initialState: SharedState = {
  filter: {},
  forms: {},
  loading: {},
};

export const shared = (state = initialState, action: any): SharedState => {
  return {
    ...state,
    filter: filter(state.filter, action),
    forms: forms(state.forms, action),
    loading: loading(state.loading, action),
  };
};
