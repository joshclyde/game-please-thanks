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
        setData({
          isAuthenticated: true,
          uid,
          user,
        });
        loadUsers();
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
