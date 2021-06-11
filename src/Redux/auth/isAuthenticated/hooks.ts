import { getProfileData, startFirebaseEventListening } from "@Firebase";

import { useAuthAndProfileFetchSuccess, useAuthAndProfileSetLocal } from "./actions";

/*
  Creates a listener to keep the user's authentication state in sync with redux.
*/
let isListening = false;
export const useAuthListener = () => {
  const authAndProfileFetchSuccess = useAuthAndProfileFetchSuccess();
  const authAndProfileSetLocal = useAuthAndProfileSetLocal();
  if (!isListening) {
    isListening = true;
    let isFirstTime = true;
    const setData = (value: {
      isAuthenticated: boolean;
      uid: string | null;
      hasGamePass: boolean | null;
      name: string | null;
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
        const { hasGamePass, name } = await getProfileData(uid);
        setData({
          isAuthenticated: true,
          uid,
          hasGamePass,
          name,
        });
      },
      () => {
        setData({
          isAuthenticated: true,
          uid: null,
          hasGamePass: null,
          name: null,
        });
      },
    );
  }
};

export { useSelectIsAuthenticated } from "./selectors";
