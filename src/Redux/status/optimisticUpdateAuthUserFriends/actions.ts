import { makeLoading2 } from "@ReduxUtils";
import { UserProfileFriends } from "@Types";

export const {
  statusReducer,
  errorReducer,
  makeUseLoad,
  makeCaseStart: makeCaseStartOptimisticUpdateAuthUserFriends,
  makeCaseSuccess: makeCaseSuccessOptimisticUpdateAuthUserFriends,
} = makeLoading2<void, UserProfileFriends>({
  makeTypePrefix: (status) => `OPTIMISTIC_UPDATE_${status}/AUTH_USER_FRIENDS`,
});
