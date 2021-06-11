import { makeReducer } from "@ReduxUtils";

import {
  makeCaseAuthAndProfileFetchSuccess,
  makeCaseAuthAndProfileSetLocal,
} from "../../auth/isAuthenticated/actions";
import { makeCaseOptimisticUpdatePendingUserProfile } from "../actions";

const { reducer: hasGamePass, addCase } = makeReducer<boolean | null>({
  initialState: null,
});

addCase(
  makeCaseAuthAndProfileFetchSuccess(
    (_state, action) => action.payload.value.hasGamePass,
  ),
);
addCase(
  makeCaseAuthAndProfileSetLocal((_state, action) => action.payload.value.hasGamePass),
);
addCase(
  makeCaseOptimisticUpdatePendingUserProfile(
    (_state, action) => action.payload.hasGamePass,
  ),
);

export const reducers = { hasGamePass };
