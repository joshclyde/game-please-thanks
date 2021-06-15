import { makeAction } from "@ReduxUtils";

export const {
  makeCase: makeCaseOptimisticUpdatePendingUserProfile,
  useDispatchAction: useOptimisticUpdatePendingUserProfile,
} = makeAction(
  `OPTIMISTIC_UPDATE_PENDING/USER_PROFILE`,
  (userProfile: {
    hasGamePass: boolean;
    name: string;
    games?: Record<string, { isOwned: boolean }>;
  }) => userProfile,
);

export const {
  makeCase: makeCaseOptimisticUpdateSuccessUserProfile,
  useDispatchAction: useOptimisticUpdateSuccessUserProfile,
} = makeAction(`OPTIMISTIC_UPDATE_SUCCESS/USER_PROFILE`, () => ({}));

export const {
  makeCase: makeCaseOptimisticUpdateErrorUserProfile,
  useDispatchAction: useOptimisticUpdateErrorUserProfile,
} = makeAction(`OPTIMISTIC_UPDATE_ERROR/USER_PROFILE`, (errorMessage: string) => ({
  errorMessage,
}));
