import { makeAction } from "@ReduxUtils";
import { UserProfileFriends, UserProfileGames } from "@Types";

export const {
  useDispatchAction: useAuthAndProfilePending,
  makeCase: makeCaseAuthAndProfileFetchPending,
} = makeAction(`AUTH_AND_PROFILE_FETCH_PENDING`, () => ({}));

interface SuccessAuthenticatedUser {
  isAuthenticated: true;
  uid: string;
  user: {
    hasGamePass: boolean;
    name: string;
    games: UserProfileGames;
    friends: UserProfileFriends;
  };
}
interface SuccessAnonymousUser {
  isAuthenticated: false;
}

/*
  Authentication has finally loaded.
  This does not mean that the user is logged in. The user could be anonymous.
  This just means that we now know whether or not the user is logged in or anonymous.
*/
export const {
  useDispatchAction: useAuthAndProfileFetchSuccess,
  makeCase: makeCaseAuthAndProfileFetchSuccess,
} = makeAction(
  `AUTH_AND_PROFILE_FETCH_SUCCESS`,
  (payload: SuccessAnonymousUser | SuccessAuthenticatedUser) => payload,
);

export const {
  useDispatchAction: useAuthAndProfileSetLocal,
  makeCase: makeCaseAuthAndProfileSetLocal,
} = makeAction(
  `AUTH_AND_PROFILE_SET_LOCAL`,
  (payload: SuccessAnonymousUser | SuccessAuthenticatedUser) => payload,
);
