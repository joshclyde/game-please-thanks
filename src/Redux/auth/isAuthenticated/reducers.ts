import { makeReducer } from "@ReduxUtils";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "./actions";

const { reducer: isAuthenticated, addCase } = makeReducer<boolean | null>({
  initialState: null,
});

addCase(
  makeCaseAuthAndProfileFetchSuccess(
    (_state, action) => action.payload.value.isAuthenticated,
  ),
);
addCase(
  makeCaseAuthAndProfileSetLocal(
    (_state, action) => action.payload.value.isAuthenticated,
  ),
);

export const reducers = { isAuthenticated };
