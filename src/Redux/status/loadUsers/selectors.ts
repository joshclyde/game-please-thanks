import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

export const useSelectIsPendingLoadUsers = makeUseSelector(() => (state: RootState) =>
  state.status.loadUsers.status === `PENDING`,
);

export const useSelectIsSuccessLoadUsers = makeUseSelector(() => (state: RootState) =>
  state.status.loadUsers.status === `SUCCESS`,
);

export const useSelectIsErrorLoadUsers = makeUseSelector(() => (state: RootState) =>
  state.status.loadUsers.status === `ERROR`,
);
