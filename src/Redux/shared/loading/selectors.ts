import { SharedState } from "../types";

export const selectSharedIsLoading = (state: { shared: SharedState }, key: string) =>
  state.shared.loading?.[key]?.isLoading;

export const selectSharedIsLoadSuccessful = (
  state: { shared: SharedState },
  key: string,
) => state.shared.loading?.[key]?.isLoadSuccessful;

export const selectSharedIsLoadFailure = (state: { shared: SharedState }, key: string) =>
  state.shared.loading?.[key]?.isLoadFailure;
