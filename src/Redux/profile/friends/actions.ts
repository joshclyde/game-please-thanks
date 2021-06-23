import { makeAction } from "@ReduxUtils";
import { UserProfileFriends } from "@Types";

export const {
  makeCase: makeCaseOptimisticUpdatePendingUserProfileFriends,
  useDispatchAction: useOptimisticUpdatePendingUserProfileFriends,
} = makeAction(
  `OPTIMISTIC_UPDATE_PENDING/USER_PROFILE_FRIENDS`,
  (friends: UserProfileFriends) => ({ friends }),
);

export const {
  makeCase: makeCaseOptimisticUpdateSuccessUserProfileFriends,
  useDispatchAction: useOptimisticUpdateSuccessUserProfileFriends,
} = makeAction(`OPTIMISTIC_UPDATE_SUCCESS/USER_PROFILE_FRIENDS`, () => ({}));

export const {
  makeCase: makeCaseOptimisticUpdateErrorUserProfileFriends,
  useDispatchAction: useOptimisticUpdateErrorUserProfileFriends,
} = makeAction(
  `OPTIMISTIC_UPDATE_ERROR/USER_PROFILE_FRIENDS`,
  (errorMessage: string) => ({
    errorMessage,
  }),
);
