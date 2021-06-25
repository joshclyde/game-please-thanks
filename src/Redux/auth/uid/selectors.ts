import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

export const makeSelectUid = () => (state: RootState) => state.auth.uid;

export const useSelectUid = makeUseSelector(makeSelectUid);
