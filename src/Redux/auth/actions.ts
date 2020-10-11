export const SET_IS_AUTHENTICATED = `SET_IS_AUTHENTICATED`;
export const makeActionSetIsAuthenticated = (isAuthenticated: boolean) => ({
  type: SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});
export type ActionSetIsAuthenticated = ReturnType<typeof makeActionSetIsAuthenticated>;

export type Actions = ActionSetIsAuthenticated;
