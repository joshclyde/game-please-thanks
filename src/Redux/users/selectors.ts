import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../types";

const makeSelectUser = (userId: string) => (state: RootState) => state.users?.[userId];

export const useSelectUser = makeUseSelector(makeSelectUser);

const makeSelectUserName = (userId: string) => (state: RootState) =>
  state.users?.[userId]?.name;

export const useSelectUserName = makeUseSelector(makeSelectUserName);

export const makeSelectAllUsers = () => (state: RootState) => state.users;

export const useSelectAllUsers = makeUseSelector(makeSelectAllUsers);
