import { useSelector } from "react-redux";

// TODO: should i change RootState to not be a generic and have it hardcoded in here?
// would be easier for myself but would no longer be a generalized library that anyone could use
export const makeUseSelector = <RootState, StateSlice, T extends Array<any>>(
  makeSelector: (...args: T) => (state: RootState) => StateSlice,
) => (...args: T) => {
  return useSelector(makeSelector(...args));
};
