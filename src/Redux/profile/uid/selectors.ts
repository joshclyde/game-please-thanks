import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

export const makeSelectUid = () => (state: RootState) => state.profile.uid;

export const useSelectUid = makeUseSelector(makeSelectUid);
