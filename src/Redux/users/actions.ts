import { makeAction } from "@ReduxUtils";

export const {
  makeCase: makeCaseOptimisticUpdatePendingUser,
  useDispatchAction: useOptimisticUpdatePendingUser,
} = makeAction(
  `OPTIMISTIC_UPDATE_PENDING/USER`,
  (uid: string, user: { hasGamePass: boolean; name: string }) => ({
    uid,
    user,
  }),
);

export const {
  makeCase: makeCaseOptimisticUpdateSuccessUser,
  useDispatchAction: useOptimisticUpdateSuccessUser,
} = makeAction(`OPTIMISTIC_UPDATE_SUCCESS/USER`, () => ({}));

export const {
  makeCase: makeCaseOptimisticUpdateErrorUser,
  useDispatchAction: useOptimisticUpdateErrorUser,
} = makeAction(`OPTIMISTIC_UPDATE_ERROR/USER`, (errorMessage: string) => ({
  errorMessage,
}));

export const {
  makeCase: makeCaseOptimisticUpdatePendingUserOwnsGame,
  useDispatchAction: useOptimisticUpdatePendingUserOwnsGame,
} = makeAction(
  `OPTIMISTIC_UPDATE_PENDING/USER_OWNS_GAME`,
  (uid: string, gameId: string, isOwned: boolean) => ({
    uid,
    gameId,
    isOwned,
  }),
);

export const {
  makeCase: makeCaseOptimisticUpdateSuccessUserOwnsGame,
  useDispatchAction: useOptimisticUpdateSuccessUserOwnsGame,
} = makeAction(`OPTIMISTIC_UPDATE_SUCCESS/USER_OWNS_GAME`, () => ({}));

export const {
  makeCase: makeCaseOptimisticUpdateErrorUserOwnsGame,
  useDispatchAction: useOptimisticUpdateErrorUserOwnsGame,
} = makeAction(`OPTIMISTIC_UPDATE_ERROR/USER_OWNS_GAME`, (errorMessage: string) => ({
  errorMessage,
}));
