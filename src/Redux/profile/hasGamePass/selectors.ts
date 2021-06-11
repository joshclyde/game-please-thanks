import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

export const makeSelectHasGamePass = () => (state: RootState) =>
  state.profile.hasGamePass;

export const useSelectHasGamePass = makeUseSelector(makeSelectHasGamePass);
