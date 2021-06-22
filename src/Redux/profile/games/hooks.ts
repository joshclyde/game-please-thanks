import { useCallback } from "react";

import { updateProfileGames } from "@Firebase";

import { useSelectUid } from "../uid/selectors";

import {
  useOptimisticUpdatePendingUserProfileGameIsOwned,
  useOptimisticUpdateSuccessUserProfileGameIsOwned,
  useOptimisticUpdateErrorUserProfileGameIsOwned,
} from "./actions";

export const useOptimisticUpdateUserProfileGameIsOwned = () => {
  const pending = useOptimisticUpdatePendingUserProfileGameIsOwned();
  const success = useOptimisticUpdateSuccessUserProfileGameIsOwned();
  const fail = useOptimisticUpdateErrorUserProfileGameIsOwned(); // calling this variable "fail" so that it doesn't conflict with "error" later on
  const uid = useSelectUid();

  return useCallback(
    async (gameId: string, isOwned: boolean) => {
      pending(gameId, isOwned);
      try {
        if (uid) {
          await updateProfileGames({ uid, games: { [gameId]: { isOwned } } });
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

export {
  useSelectProfileGamesOwned,
  useSelectProfileIsGameOwned,
  useSelectProfileGamesOwnedIds,
} from "./selectors";
