import { useSelector } from "react-redux";

// TODO: should i change RootState to not be a generic and have it hardcoded in here? wouldn't be generic for any project anymore, but would be easier to use myself

export const makeUseSelector = <RootState, StateSlice, T extends Array<any>>(
  makeSelector: (...args: T) => (state: RootState) => StateSlice,
) => (...args: T) => {
  return useSelector(makeSelector(...args));
};
