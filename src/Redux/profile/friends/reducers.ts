import { makeReducer } from "@ReduxUtils";
import { UserProfileFriends } from "@Types";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "../../auth/isAuthenticated/actions";

import { makeCaseOptimisticUpdatePendingUserProfileFriends } from "./actions";

const { reducer: friends, addCase } = makeReducer<UserProfileFriends | null>({
  initialState: null,
});

addCase(
  makeCaseAuthAndProfileFetchSuccess(
    (_state, action) => action.payload.value.friends || null,
  ),
);

addCase(makeCaseAuthAndProfileSetLocal((_state, action) => action.payload.value.friends));

addCase(
  makeCaseOptimisticUpdatePendingUserProfileFriends(
    (_state, action) => action.payload.friends,
  ),
);

export const reducers = { friends };
