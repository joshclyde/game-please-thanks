import { makeUseSelector } from "@ReduxUtils";

import { RootState } from "../../../types";

export const useSelectIsAuthenticationLoading = makeUseSelector(
  () => (state: RootState) => state.auth.isAuthenticated.load.isPending,
);
export const useSelectDidAuthenticationLoadSucceed = makeUseSelector(
  () => (state: RootState) => state.auth.isAuthenticated.load.isSuccess,
);
export const useSelectDidAuthenticationLoadFail = makeUseSelector(
  () => (state: RootState) => state.auth.isAuthenticated.load.isFailure,
);
