import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../types";

export const useSelectIsPendingOptimisticUpdateUserProfile = makeUseSelector(
  () => (state: RootState) =>
    state.status.optimisticUpdateUserProfile.status === `PENDING`,
);

export const useSelectIsSuccessOptimisticUpdateUserProfile = makeUseSelector(
  () => (state: RootState) =>
    state.status.optimisticUpdateUserProfile.status === `SUCCESS`,
);

export const useSelectIsErrorOptimisticUpdateUserProfile = makeUseSelector(
  () => (state: RootState) => state.status.optimisticUpdateUserProfile.status === `ERROR`,
);
