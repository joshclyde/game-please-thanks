import { makeAction } from "@ReduxUtils";

import { UsersState } from "../../users/types";

export const {
  makeCase: makeCaseLoadUsersPending,
  useDispatchAction: useLoadUsersPending,
} = makeAction(`LOAD_PENDING/USERS`, () => ({}));

export const {
  makeCase: makeCaseLoadUsersSuccess,
  useDispatchAction: useLoadUsersSuccess,
} = makeAction(`LOAD_SUCCESS/USERS`, (users: UsersState) => ({ users }));

export const {
  makeCase: makeCaseLoadUsersError,
  useDispatchAction: useLoadUsersError,
} = makeAction(`LOAD_ERROR/USERS`, (errorMessage: string) => ({
  errorMessage,
}));
