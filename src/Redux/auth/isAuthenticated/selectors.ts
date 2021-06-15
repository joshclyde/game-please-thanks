import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

const makeSelectIsAuthenticated = () => (state: RootState) => state.auth.isAuthenticated;

export const useSelectIsAuthenticated = makeUseSelector(makeSelectIsAuthenticated);
