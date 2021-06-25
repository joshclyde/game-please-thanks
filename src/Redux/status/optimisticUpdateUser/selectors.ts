import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

export const useSelectIsPendingOptimisticUpdateUser = makeUseSelector(
  () => (state: RootState) => state.status.optimisticUpdateUser.status === `PENDING`,
);

export const useSelectIsSuccessOptimisticUpdateUser = makeUseSelector(
  () => (state: RootState) => state.status.optimisticUpdateUser.status === `SUCCESS`,
);

export const useSelectIsErrorOptimisticUpdateUser = makeUseSelector(
  () => (state: RootState) => state.status.optimisticUpdateUser.status === `ERROR`,
);
