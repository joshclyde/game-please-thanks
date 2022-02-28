import { makeReducer } from "@ReduxUtils";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "../auth/isAuthenticated/actions";
import { makeCaseLoadUsersSuccess } from "../status/loadUsers/actions";
import { makeCaseStartOptimisticUpdateAuthUserFriends } from "../status/optimisticUpdateAuthUserFriends/actions";

import {
  makeCaseOptimisticUpdatePendingUser,
  makeCaseOptimisticUpdatePendingUserOwnsGame,
} from "./actions";
import { UsersState } from "./types";

const initialState: UsersState = {};
const { reducer: users, addCase } = makeReducer<UsersState>({ initialState });

addCase(
  makeCaseLoadUsersSuccess((state, action) => {
    return {
      ...state,
      ...action.payload.users,
    };
  }),
);

addCase(
  makeCaseAuthAndProfileFetchSuccess((state, { payload }) => {
    if (`uid` in payload) {
      const { uid, user } = payload;
      return {
        ...state,
        [uid]: user,
      };
    }
    return state;
  }),
);

addCase(
  makeCaseAuthAndProfileSetLocal((state, { payload }) => {
    if (`uid` in payload) {
      const { uid, user } = payload;
      return {
        ...state,
        [uid]: user,
      };
    }
    return state;
  }),
);

addCase(
  makeCaseOptimisticUpdatePendingUser((state, { payload: { uid, user } }) => {
    return {
      ...state,
      [uid]: {
        ...state[uid],
        ...user,
      },
    };
  }),
);

addCase(
  makeCaseOptimisticUpdatePendingUserOwnsGame(
    (state, { payload: { uid, gameId, isOwned } }) => {
      return {
        ...state,
        [uid]: {
          ...state[uid],
          games: {
            ...state[uid]?.games,
            [gameId]: {
              ...state[uid]?.games?.[gameId],
              isOwned,
            },
          },
        },
      };
    },
  ),
);

addCase(
  makeCaseStartOptimisticUpdateAuthUserFriends(
    // TODO: this needs to be fixed if I decide to keep using redux.
    (state, { payload: { meta: friends } }) => {
      return state;
    },
  ),
);

export const reducers = { users };
