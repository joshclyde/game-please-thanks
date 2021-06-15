import { makeReducer } from "@ReduxUtils";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "../../auth/isAuthenticated/actions";
import { makeCaseOptimisticUpdatePendingUserProfile } from "../actions";

import { makeCaseOptimisticUpdatePendingUserProfileGameIsOwned } from "./actions";

const { reducer: games, addCase } = makeReducer<Record<
  string,
  { isOwned: boolean }
> | null>({
  initialState: null,
});

addCase(
  makeCaseAuthAndProfileFetchSuccess(
    (_state, action) => action.payload.value.games || null,
  ),
);

addCase(makeCaseAuthAndProfileSetLocal((_state, action) => action.payload.value.games));

addCase(
  makeCaseOptimisticUpdatePendingUserProfile((state, action) => {
    const games = action.payload.games;
    // should it update the games entirely? or just add the games to the rest of the games?
    return games ? games : state;
  }),
);

addCase(
  makeCaseOptimisticUpdatePendingUserProfileGameIsOwned((state, action) => {
    return {
      ...state,
      [action.payload.gameId]: {
        ...state?.[action.payload?.gameId],
        isOwned: action.payload.isOwned,
      },
    };
  }),
);

export const reducers = { games };
