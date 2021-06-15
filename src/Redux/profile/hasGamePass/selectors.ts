import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

const makeSelectHasGamePass = () => (state: RootState) => state.profile.hasGamePass;

export const useSelectHasGamePass = makeUseSelector(makeSelectHasGamePass);
