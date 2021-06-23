import { makeReducer } from "@ReduxUtils";

import { makeCaseLoadUsersSuccess } from "../status/loadUsers/actions";

import { UsersState } from "./types";

const initialState: UsersState = {};
const { reducer: users, addCase } = makeReducer<UsersState>({ initialState });

addCase(
  makeCaseLoadUsersSuccess((state, action) => {
    return {
      ...state,
      ...action.payload.users,
    };
  }),
);

export const reducers = { users };
