import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

export const makeSelectIsAuthenticated = () => (state: RootState) =>
  state.auth.isAuthenticated.value;

export const useSelectIsAuthenticated = makeUseSelector(makeSelectIsAuthenticated);
