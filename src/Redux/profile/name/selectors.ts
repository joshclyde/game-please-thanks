import { RootState } from "@Redux";
import { makeUseSelector } from "@ReduxUtils";

const makeSelectName = () => (state: RootState) => state.profile.name;

export const useSelectName = makeUseSelector(makeSelectName);
