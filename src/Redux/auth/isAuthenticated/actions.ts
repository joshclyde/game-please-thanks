import { makeAction } from "@ReduxUtils";

export const {
  useDispatchAction: useAuthAndProfilePending,
  makeCase: makeCaseAuthAndProfileFetchPending,
} = makeAction(`AUTH_AND_PROFILE_FETCH_PENDING`, () => ({}));

export const {
  useDispatchAction: useAuthAndProfileFetchSuccess,
  makeCase: makeCaseAuthAndProfileFetchSuccess,
} = makeAction(
  `AUTH_AND_PROFILE_FETCH_SUCCESS`,
  (value: {
    isAuthenticated: boolean;
    uid: string | null;
    hasGamePass: boolean | null;
    name: string | null;
  }) => ({ value }),
);

export const {
  useDispatchAction: useAuthAndProfileSetLocal,
  makeCase: makeCaseAuthAndProfileSetLocal,
} = makeAction(
  `AUTH_AND_PROFILE_SET_LOCAL`,
  (value: {
    isAuthenticated: boolean;
    uid: string | null;
    hasGamePass: boolean | null;
    name: string | null;
  }) => ({ value }),
);
