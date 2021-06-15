import { makeAction } from "@ReduxUtils";

export const {
  makeCase: makeCaseOptimisticUpdatePendingUserProfileGameIsOwned,
  useDispatchAction: useOptimisticUpdatePendingUserProfileGameIsOwned,
} = makeAction(
  `OPTIMISTIC_UPDATE_PENDING/USER_PROFILE_GAME_IS_OWNED`,
  (gameId: string, isOwned: boolean) => ({ gameId, isOwned }),
);

export const {
  makeCase: makeCaseOptimisticUpdateSuccessUserProfileGameIsOwned,
  useDispatchAction: useOptimisticUpdateSuccessUserProfileGameIsOwned,
} = makeAction(`OPTIMISTIC_UPDATE_SUCCESS/USER_PROFILE_GAME_IS_OWNED`, () => ({}));

export const {
  makeCase: makeCaseOptimisticUpdateErrorUserProfileGameIsOwned,
  useDispatchAction: useOptimisticUpdateErrorUserProfileGameIsOwned,
} = makeAction(
  `OPTIMISTIC_UPDATE_ERROR/USER_PROFILE_GAME_IS_OWNED`,
  (errorMessage: string) => ({
    errorMessage,
  }),
);
