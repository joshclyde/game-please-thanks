import { makeReducer } from "@ReduxUtils";

import {
  makeCaseOptimisticUpdatePendingUserProfile,
  makeCaseOptimisticUpdateSuccessUserProfile,
  makeCaseOptimisticUpdateErrorUserProfile,
} from "../../profile/actions";

const { reducer: optimisticUpdateUserProfile, addCase } = makeReducer<{
  status: string;
  error: string | null;
}>({
  initialState: {
    status: ``,
    error: null,
  },
});

addCase(
  makeCaseOptimisticUpdatePendingUserProfile((_state, _action) => ({
    status: `PENDING`,
    error: null,
  })),
);
addCase(
  makeCaseOptimisticUpdateSuccessUserProfile((_state, _action) => ({
    status: `SUCCESS`,
    error: null,
  })),
);
addCase(
  makeCaseOptimisticUpdateErrorUserProfile((_state, action) => ({
    status: `ERROR`,
    error: action.payload.errorMessage,
  })),
);

export const reducers = { optimisticUpdateUserProfile };
