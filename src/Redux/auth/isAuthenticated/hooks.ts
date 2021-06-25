import { getProfileData, startFirebaseEventListening } from "@Firebase";

import { useLoadUsers } from "../../status/loadUsers/hooks";

import { useAuthAndProfileFetchSuccess, useAuthAndProfileSetLocal } from "./actions";

/*
  Creates a listener to keep the user's authentication state in sync with redux.
*/
let isListening = false;
export const useAuthListener = () => {
  const authAndProfileFetchSuccess = useAuthAndProfileFetchSuccess();
  const authAndProfileSetLocal = useAuthAndProfileSetLocal();
  const loadUsers = useLoadUsers();
  if (!isListening) {
    isListening = true;
    let isFirstTime = true;
    const setData = (value: Parameters<typeof authAndProfileFetchSuccess>[0]) => {
      if (isFirstTime) {
        isFirstTime = false;
        authAndProfileFetchSuccess(value);
      } else {
        authAndProfileSetLocal(value);
      }
    };

    startFirebaseEventListening(
      async ({ uid }) => {
        const user = await getProfileData(uid);
        const { friends } = user;
        setData({
          isAuthenticated: true,
          uid,
          user,
        });
        const friendIds = Object.keys(friends).filter((friendId) => {
          const friend = friends[friendId];
          return friend.isFriend;
        });
        loadUsers(friendIds);
      },
      () => {
        setData({
          isAuthenticated: false,
        });
      },
    );
  }
};

export { useSelectIsAuthenticated } from "./selectors";
