import { makeReducer } from "@ReduxUtils";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "../isAuthenticated/actions";

const { reducer: uid, addCase } = makeReducer<string | null>({
  initialState: null,
});

addCase(
  makeCaseAuthAndProfileFetchSuccess((_state, { payload }) =>
    `uid` in payload ? payload.uid : null,
  ),
);
addCase(
  makeCaseAuthAndProfileSetLocal((_state, { payload }) =>
    `uid` in payload ? payload.uid : null,
  ),
);

export const reducers = { uid };
