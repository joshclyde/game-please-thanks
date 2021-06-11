import { makeReducer } from "@ReduxUtils";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "../../auth/isAuthenticated/actions";

const { reducer: uid, addCase } = makeReducer<string | null>({
  initialState: null,
});

addCase(makeCaseAuthAndProfileFetchSuccess((_state, action) => action.payload.value.uid));
addCase(makeCaseAuthAndProfileSetLocal((_state, action) => action.payload.value.uid));

export const reducers = { uid };
