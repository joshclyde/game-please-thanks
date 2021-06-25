import { useCallback } from "react";

import { updateUserData, updateProfileGames } from "@Firebase";

import {
  useOptimisticUpdatePendingUser,
  useOptimisticUpdateSuccessUser,
  useOptimisticUpdateErrorUser,
  useOptimisticUpdatePendingUserOwnsGame,
  useOptimisticUpdateSuccessUserOwnsGame,
  useOptimisticUpdateErrorUserOwnsGame,
} from "../users/actions";

import { useSelectUid } from "./uid/selectors";

export const useOptimisticUpdateAuthUser = () => {
  const pending = useOptimisticUpdatePendingUser();
  const success = useOptimisticUpdateSuccessUser();
  const fail = useOptimisticUpdateErrorUser(); // calling this variable "fail" so that it doesn't conflict with "error" later on
  const uid = useSelectUid();

  return useCallback(
    async (user: { hasGamePass: boolean; name: string }) => {
      try {
        if (uid) {
          pending(uid, user);
          await updateUserData({ uid, ...user });
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

export const useOptimisticUpdateAuthUserOwnsGame = () => {
  const pending = useOptimisticUpdatePendingUserOwnsGame();
  const success = useOptimisticUpdateSuccessUserOwnsGame();
  const fail = useOptimisticUpdateErrorUserOwnsGame(); // calling this variable "fail" so that it doesn't conflict with "error" later on
  const uid = useSelectUid();

  return useCallback(
    async (gameId: string, isOwned: boolean) => {
      try {
        if (uid) {
          pending(uid, gameId, isOwned);
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

export * from "./uid/hooks";
export * from "./isAuthenticated/hooks";
export {
  useSelectAuthName,
  useSelectAuthHasGamePass,
  useSelectProfileGamesOwnedIds,
  useSelectAuthFriendsIds,
  useSelectAuthFriendIdsSorted,
  useSelectAuthFriendIdsThatOwnGame,
  useSelectAuthIsGameOwned,
  useSelectAuthUidAndFriendsIdsSorted,
} from "./selectors";
