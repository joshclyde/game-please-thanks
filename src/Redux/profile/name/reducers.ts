import { makeReducer } from "@ReduxUtils";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "../../auth/isAuthenticated/actions";
import { makeCaseOptimisticUpdatePendingUserProfile } from "../actions";

const { reducer: name, addCase } = makeReducer<string | null>({
  initialState: null,
});

addCase(
  makeCaseAuthAndProfileFetchSuccess((_state, action) => action.payload.value.name),
);
addCase(makeCaseAuthAndProfileSetLocal((_state, action) => action.payload.value.name));

addCase(
  makeCaseOptimisticUpdatePendingUserProfile((_state, action) => action.payload.name),
);

export const reducers = { name };
