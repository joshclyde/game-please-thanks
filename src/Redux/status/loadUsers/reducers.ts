import { makeReducer } from "@ReduxUtils";

import {
  makeCaseLoadUsersPending,
  makeCaseLoadUsersSuccess,
  makeCaseLoadUsersError,
} from "./actions";

const { reducer: loadUsers, addCase } = makeReducer<{
  status: string;
  error: string | null;
}>({
  initialState: {
    status: ``,
    error: null,
  },
});

addCase(
  makeCaseLoadUsersPending((_state, _action) => ({
    status: `PENDING`,
    error: null,
  })),
);
addCase(
  makeCaseLoadUsersSuccess((_state, _action) => ({
    status: `SUCCESS`,
    error: null,
  })),
);
addCase(
  makeCaseLoadUsersError((_state, action) => ({
    status: `ERROR`,
    error: action.payload.errorMessage,
  })),
);

export const reducers = { loadUsers };
