import { useCallback } from "react";
import { combineReducers } from "redux";

import { StringLiteral } from "@Types";

import { makeAction } from "../../core/makeAction";
import { makeReducer } from "../../core/makeReducer";

/*
  Brainstorming a Naming Convention
  
  `${status}/${property}`

  State
    - PENDING
    - SUCCESS
    - ERROR

  Status
  - NONE (the data is unknown and no load has been attempted)

  - LOAD (load the data)
    - PENDING (load in progress)
    - SUCCESS (successful load, set data)
    - ERROR (failed to load)

  - SOFT_RELOAD (wants to persist the existing data while reloading the data)
    - PENDING (reload in progress)
    - SUCCESS (set data)
    - ERROR (failed to load data)
    
  - HARD_RELOAD (wants to erase past data and then reload the data)
    - PENDING (reload in progress)
    - SUCCESS (set data)
    - ERROR (failed to load data)
    
  - OPTIMISTIC_UPDATE (update the value on the back-end but optimistically set the value locally before completing)
    - PENDING (update in progress, set data)
    - SUCCESS (successful update)
    - ERROR (failed to update data, revert data to original state?)
    
  - PESSIMISTIC_UPDATE (update the value on the back-end but and wait to set the value locally until completing)
    - PENDING (update in progress)
    - SUCCESS (successful update, set data)
    - ERROR (failed to update data)

  - PESSIMISTIC_DELETE_PENDING (in the process of deleting on the back-end and once complete will delete the value locally)

  - SET_LOCAL (set the data in redux)
  - REMOVE_LOCAL (remove the data from redux)
*/

/*
  The actions and reducers are closely tied so I think it makes sense to combine everything
  into a single factory function.

  TODO: if useExecute is not passed in then typescript complains about the other types,
  probs cuz it can't complete type inference.
*/
export const makeLoading = <
  Start,
  Success,
  Failure,
  ExecuteArgs extends Array<any>,
  ExecuteReturnValue
>({
  START,
  SUCCESS,
  FAILURE,
  useExecute,
}: {
  START: StringLiteral<Start>;
  SUCCESS: StringLiteral<Success>;
  FAILURE: StringLiteral<Failure>;
  useExecute: () => (...args: ExecuteArgs) => Promise<ExecuteReturnValue>;
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
    (value: ExecuteReturnValue) => ({ value }),
  );
  const { useDispatchAction: useFailure, makeCase: makeCaseFailure } = makeAction(
    FAILURE,
    (error: Error) => ({
      error,
    }),
  );

  const reduceTrue = (): boolean => true;
  const reduceFalse = (): boolean => false;

  const pending = makeReducer({ initialState: false });
  pending.addCase(makeCaseStart(reduceTrue));
  pending.addCase(makeCaseSuccess(reduceFalse));
  pending.addCase(makeCaseFailure(reduceFalse));

  const success = makeReducer({ initialState: false });
  success.addCase(makeCaseStart(reduceFalse));
  success.addCase(makeCaseSuccess(reduceTrue));
  success.addCase(makeCaseFailure(reduceFalse));

  const failure = makeReducer({ initialState: false });
  failure.addCase(makeCaseStart(reduceFalse));
  failure.addCase(makeCaseSuccess(reduceFalse));
  failure.addCase(makeCaseFailure(reduceTrue));

  // TODO: this probably is not allowed to be an Error type
  const error = makeReducer<Error | null>({ initialState: null });
  error.addCase(makeCaseStart<Error | null>(() => null));
  error.addCase(makeCaseSuccess<Error | null>(() => null));
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
          const value = await execute(...args);
          success(value);
        } catch (error) {
          failure(error);
        }
      },
      [start, execute, success, failure],
    );
  };
  return { useLoad, reducers };
};
