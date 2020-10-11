import { State } from "../types";

export type StateJustAuth = Pick<State, "auth">;

export const selectIsAuthenticated = (state: StateJustAuth) => state.auth.isAuthenticated;
