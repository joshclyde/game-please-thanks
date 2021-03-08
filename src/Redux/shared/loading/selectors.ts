import { SharedState } from "../types";

export const selectSharedIsLoading = (state: { shared: SharedState }, key: string) =>
  state.shared.loading?.[key]?.isLoading;

export const makeSelectSharedIsLoading = (key: string) => (state: {
  shared: SharedState;
}) => selectSharedIsLoading(state, key);

export const selectSharedIsLoadSuccessful = (
  state: { shared: SharedState },
  key: string,
) => state.shared.loading?.[key]?.isLoadSuccessful;

export const makeSelectSharedIsLoadSuccessful = (key: string) => (state: {
  shared: SharedState;
}) => selectSharedIsLoadSuccessful(state, key);

export const selectSharedIsLoadFailure = (state: { shared: SharedState }, key: string) =>
  state.shared.loading?.[key]?.isLoadFailure;

export const makeSelectSharedIsLoadFailure = (key: string) => (state: {
  shared: SharedState;
}) => selectSharedIsLoadFailure(state, key);
