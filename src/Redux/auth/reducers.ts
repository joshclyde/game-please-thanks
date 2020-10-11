import { Actions, ActionSetIsAuthenticated, SET_IS_AUTHENTICATED } from "./actions";
import { AuthState } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
};

const reduceSetIsAuthenticated = (
  state: AuthState,
  { payload: { isAuthenticated } }: ActionSetIsAuthenticated,
) => {
  return {
    ...state,
    isAuthenticated,
  };
};

export const auth = (state = initialState, action: Actions): AuthState => {
  const { type } = action;
  switch (type) {
    case SET_IS_AUTHENTICATED:
      return reduceSetIsAuthenticated(state, action as ActionSetIsAuthenticated);
  }
  return state;
};
