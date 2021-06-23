import { getProfileData, startFirebaseEventListening } from "@Firebase";
import { UserProfileFriends, UserProfileGames } from "@Types";

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
    const setData = (value: {
      isAuthenticated: boolean;
      uid: string | null;
      hasGamePass: boolean | null;
      name: string | null;
      games: UserProfileGames | null;
      friends: UserProfileFriends | null;
    }) => {
      if (isFirstTime) {
        isFirstTime = false;
        authAndProfileFetchSuccess(value);
      } else {
        authAndProfileSetLocal(value);
      }
    };

    startFirebaseEventListening(
      async ({ uid }) => {
        const { hasGamePass, name, games, friends } = await getProfileData(uid);
        setData({
          isAuthenticated: true,
          uid,
          hasGamePass,
          name,
          games,
          friends,
        });
        const friendIds = Object.keys(friends).filter((friendId) => {
          const friend = friends[friendId];
          return friend.isFriend;
        });
        loadUsers(friendIds);
      },
      () => {
        setData({
          isAuthenticated: true,
          uid: null,
          hasGamePass: null,
          name: null,
          games: null,
          friends: null,
        });
      },
    );
  }
};

export { useSelectIsAuthenticated } from "./selectors";
