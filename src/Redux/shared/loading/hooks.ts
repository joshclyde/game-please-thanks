import { useSelector } from "react-redux";

import {
  makeSelectSharedIsLoading,
  makeSelectSharedIsLoadSuccessful,
  makeSelectSharedIsLoadFailure,
} from "./selectors";

export const makeUseSelectIsLoading = (id: string) => () => {
  return useSelector(makeSelectSharedIsLoading(id));
};
export const makeUseSelectIsLoadSuccessful = (id: string) => () => {
  return useSelector(makeSelectSharedIsLoadSuccessful(id));
};
export const makeUseSelectIsLoadFailure = (id: string) => () => {
  return useSelector(makeSelectSharedIsLoadFailure(id));
};
