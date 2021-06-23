import { makeReducer } from "@ReduxUtils";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "../../auth/isAuthenticated/actions";

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
