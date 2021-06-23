import { useCallback } from "react";

import { updateProfileFriends } from "@Firebase";
import { UserProfileFriends } from "@Types";

import { useSelectUid } from "../uid/selectors";

import {
  useOptimisticUpdatePendingUserProfileFriends,
  useOptimisticUpdateSuccessUserProfileFriends,
  useOptimisticUpdateErrorUserProfileFriends,
} from "./actions";

export const useOptimisticUpdateUserProfileFriends = () => {
  const pending = useOptimisticUpdatePendingUserProfileFriends();
  const success = useOptimisticUpdateSuccessUserProfileFriends();
  const fail = useOptimisticUpdateErrorUserProfileFriends(); // calling this variable "fail" so that it doesn't conflict with "error" later on
  const uid = useSelectUid();

  return useCallback(
    async (friends: UserProfileFriends) => {
      pending(friends);
      try {
        if (uid) {
          await updateProfileFriends({ uid, friends });
          success();
        } else {
          throw new Error(
            `There is no uid in redux. Most likely the user is not authenticated.`,
          );
        }
      } catch (error) {
        let errorMessage = `An unkown error occurred.`;
        if (typeof error?.message === `string`) {
          errorMessage = error.message;
        }
        fail(errorMessage);
        throw error;
      }
    },
    [pending, success, fail, uid],
  );
};

export { useSelectUserProfileFriends, useSelectUserProfileFriendsIds } from "./selectors";
