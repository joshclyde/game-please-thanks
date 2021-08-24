import { useCallback } from "react";

import { updateProfileFriends } from "@Firebase";
import { useSelectUid } from "@Redux";
import { UserProfileFriends } from "@Types";

import { makeUseLoad } from "./actions";

const useExecute = () => {
  const uid = useSelectUid();
  return useCallback(
    async (friends: UserProfileFriends) => {
      if (uid != null) {
        await updateProfileFriends({ uid, friends });
      } else {
        throw new Error(
          `There is no uid in redux. Most likely the user is not authenticated.`,
        );
      }
    },
    [uid],
  );
};

export const useOptimisticUpdateAuthUserFriends = makeUseLoad(useExecute);
