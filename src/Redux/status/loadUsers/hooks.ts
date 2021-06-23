import { useCallback } from "react";

import { getUsers } from "@Firebase";

import { useLoadUsersPending, useLoadUsersSuccess, useLoadUsersError } from "./actions";

export const useLoadUsers = () => {
  const pending = useLoadUsersPending();
  const success = useLoadUsersSuccess();
  const fail = useLoadUsersError(); // calling this variable "fail" so that it doesn't conflict with "error" later on

  return useCallback(
    async (uids: Array<string>) => {
      pending();
      try {
        const users = await getUsers(uids);
        success(users);
      } catch (error) {
        let errorMessage = `An unkown error occurred.`;
        if (typeof error?.message === `string`) {
          errorMessage = error.message;
        }
        fail(errorMessage);
        throw error;
      }
    },
    [pending, success, fail],
  );
};

export {
  useSelectIsPendingLoadUsers,
  useSelectIsSuccessLoadUsers,
  useSelectIsErrorLoadUsers,
} from "./selectors";
