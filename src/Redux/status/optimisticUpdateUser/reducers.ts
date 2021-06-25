import { makeReducer } from "@ReduxUtils";

import {
  makeCaseOptimisticUpdatePendingUser,
  makeCaseOptimisticUpdateSuccessUser,
  makeCaseOptimisticUpdateErrorUser,
} from "../../users/actions";

const { reducer: optimisticUpdateUser, addCase } = makeReducer<{
  status: string;
  error: string | null;
}>({
  initialState: {
    status: ``,
    error: null,
  },
});

// TODO: should probably have these stored with ids somehow
addCase(
  makeCaseOptimisticUpdatePendingUser((_state, _action) => ({
    status: `PENDING`,
    error: null,
  })),
);
addCase(
  makeCaseOptimisticUpdateSuccessUser((_state, _action) => ({
    status: `SUCCESS`,
    error: null,
  })),
);
addCase(
  makeCaseOptimisticUpdateErrorUser((_state, action) => ({
    status: `ERROR`,
    error: action.payload.errorMessage,
  })),
);

export const reducers = { optimisticUpdateUser };
