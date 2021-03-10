import { filter } from "./filter/reducers";
import { loading } from "./loading/reducers";
import { SharedState } from "./types";

const initialState: SharedState = {
  filter: {},
  loading: {},
};

export const shared = (state = initialState, action: any): SharedState => {
  return {
    ...state,
    filter: filter(state.filter, action),
    loading: loading(state.loading, action),
  };
};
