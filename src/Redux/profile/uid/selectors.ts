import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

const makeSelectUid = () => (state: RootState) => state.profile.uid;

export const useSelectUid = makeUseSelector(makeSelectUid);
