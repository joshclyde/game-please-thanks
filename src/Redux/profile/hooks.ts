import { useCallback } from "react";

import { updateProfileData } from "@Firebase";

import {
  useOptimisticUpdatePendingUserProfile,
  useOptimisticUpdateSuccessUserProfile,
  useOptimisticUpdateErrorUserProfile,
} from "./actions";
import { useSelectUid } from "./uid/selectors";

export const useOptimisticUpdateUserProfile = () => {
  const pending = useOptimisticUpdatePendingUserProfile();
  const success = useOptimisticUpdateSuccessUserProfile();
  const fail = useOptimisticUpdateErrorUserProfile(); // calling this variable "fail" so that it doesn't conflict with "error" later on
  const uid = useSelectUid();

  return useCallback(
    async (userProfile: { hasGamePass: boolean; name: string }) => {
      pending(userProfile);
      try {
        if (uid) {
          await updateProfileData({ uid, ...userProfile });
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

export * from "./name/hooks";
export * from "./hasGamePass/hooks";
export * from "./uid/hooks";
export * from "./games/hooks";
