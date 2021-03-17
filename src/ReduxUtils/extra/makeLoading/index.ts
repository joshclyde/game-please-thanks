import { useCallback } from "react";
import { combineReducers } from "redux";

import { StringLiteral } from "@Types";

import { makeAction } from "../../core/makeAction";
import { makeReducer } from "../../core/makeReducer";

/*
  The actions and reducers are closely tied so I think it makes sense to combine everything
  into a single factory function.

  TODO: if useExecute is not passed in then typescript complains about the other types,
  probs cuz it can't complete type inference.
*/
export const makeLoading = <Start, Success, Failure, ExecuteArgs extends Array<any>>({
  START,
  SUCCESS,
  FAILURE,
  useExecute,
}: {
  START: StringLiteral<Start>;
  SUCCESS: StringLiteral<Success>;
  FAILURE: StringLiteral<Failure>;
  useExecute: () => (...args: ExecuteArgs) => void;
}) => {
  /*
    Actions
  */
  const { useDispatchAction: useStart, makeCase: makeCaseStart } = makeAction(
    START,
    () => ({}),
  );
  const { useDispatchAction: useSuccess, makeCase: makeCaseSuccess } = makeAction(
    SUCCESS,
    () => ({}),
  );
  const { useDispatchAction: useFailure, makeCase: makeCaseFailure } = makeAction(
    FAILURE,
    (error: Error) => ({
      error,
    }),
  );

  const pending = makeReducer({ initialState: false });
  pending.addCase(makeCaseStart(() => true));
  pending.addCase(makeCaseSuccess(() => false));
  pending.addCase(makeCaseFailure(() => false));

  const success = makeReducer({ initialState: false });
  success.addCase(makeCaseStart(() => false));
  success.addCase(makeCaseSuccess(() => true));
  success.addCase(makeCaseFailure(() => false));

  const failure = makeReducer({ initialState: false });
  failure.addCase(makeCaseStart(() => false));
  failure.addCase(makeCaseSuccess(() => false));
  failure.addCase(makeCaseFailure(() => true));

  // TODO: this probably is not allowed to be an Error type
  const error = makeReducer<Error>({ initialState: null });
  error.addCase(makeCaseStart(() => null));
  error.addCase(makeCaseSuccess(() => null));
  error.addCase(makeCaseFailure((_state, action) => action.payload.error));

  const reducers = combineReducers({
    isPending: pending.reducer,
    isSuccess: success.reducer,
    isFailure: failure.reducer,
    error: error.reducer,
  });

  const useLoad = () => {
    const start = useStart();
    const execute = useExecute();
    const success = useSuccess();
    const failure = useFailure();
    return useCallback(
      async (...args: ExecuteArgs) => {
        start();
        try {
          await execute(...args);
          success();
        } catch (error) {
          failure(error);
        }
      },
      [start, execute, success, failure],
    );
  };
  return { useLoad, reducers };
};
