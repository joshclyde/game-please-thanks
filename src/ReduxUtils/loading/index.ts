import { useCallback } from "react";
import { combineReducers } from "redux";

import { makeAction } from "../cases";
import { makeFieldFactory } from "../field";

export interface LoadingState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  error?: Error;
}

type StringLiteral<T> = T extends string ? (string extends T ? never : T) : never;

interface FactoryArgs<
  RootState,
  Initiate,
  Success,
  Failure,
  LoadArgs extends Array<any>
> {
  // is it okay to pass in a hook as an argument?
  useLoadFunction: () => (...args: LoadArgs) => Promise<void>;
  selectStateFromRoot: (state: RootState) => LoadingState;
  INITIATE_LOADING: Initiate;
  SUCCESS_LOADING: Success;
  FAILURE_LOADING: Failure;
}

// TODO: maybe change this? at least take another look at it, see if it should be split up. don't really need the main reducer in here. just the reducers for the indiviual fields? maybe not even though.
export const makeLoadingFactory = <
  RootState,
  Initiate,
  Success,
  Failure,
  LoadArgs extends Array<any>
>({
  useLoadFunction,
  selectStateFromRoot,
  INITIATE_LOADING,
  SUCCESS_LOADING,
  FAILURE_LOADING,
}: FactoryArgs<
  RootState,
  StringLiteral<Initiate>,
  StringLiteral<Success>,
  StringLiteral<Failure>,
  LoadArgs
>) => {
  /*
    Actions
  */
  const {
    useDispatchAction: useInitiateLoadingAction,
    isAction: isInitiateLoadingAction,
  } = makeAction(INITIATE_LOADING, () => ({}));
  const {
    useDispatchAction: useSuccessLoading,
    isAction: isSuccessLoadingAction,
  } = makeAction(SUCCESS_LOADING, () => ({}));
  const {
    useDispatchAction: useFailureLoading,
    isAction: isFailureLoadingAction,
  } = makeAction(FAILURE_LOADING, (error: Error) => ({
    error,
  }));

  /*
    isLoading field
  */
  const {
    reducer: isLoadingReducer,
    useSelectValue: useSelectIsLoading,
  } = makeFieldFactory({
    actionIdentifier: `TODO`,
    initialValue: false,
    selectStateFromRoot: (state: RootState) => selectStateFromRoot(state).isLoading,
  });
  isLoadingReducer.makeCase(isInitiateLoadingAction, () => true);
  isLoadingReducer.makeCase(isSuccessLoadingAction, () => false);
  isLoadingReducer.makeCase(isFailureLoadingAction, () => false);

  /*
    isSuccess field
  */
  const {
    reducer: isSuccessReducer,
    useSelectValue: useSelectDidLoadSucceed,
  } = makeFieldFactory({
    actionIdentifier: `TODO`,
    initialValue: false,
    selectStateFromRoot: (state: RootState) => selectStateFromRoot(state).isSuccess,
  });
  isSuccessReducer.makeCase(isInitiateLoadingAction, () => false);
  isSuccessReducer.makeCase(isSuccessLoadingAction, () => true);
  isSuccessReducer.makeCase(isFailureLoadingAction, () => false);

  /*
    isFailure field
  */
  const {
    reducer: isFailureReducer,
    useSelectValue: useSelectDidLoadFail,
  } = makeFieldFactory({
    actionIdentifier: `TODO`,
    initialValue: false,
    selectStateFromRoot: (state: RootState) => selectStateFromRoot(state).isFailure,
  });
  isFailureReducer.makeCase(isInitiateLoadingAction, () => false);
  isFailureReducer.makeCase(isSuccessLoadingAction, () => false);
  isFailureReducer.makeCase(isFailureLoadingAction, () => true);

  /*
    error field
  */
  const { reducer: errorReducer, useSelectValue: useSelectError } = makeFieldFactory<
    RootState,
    Error
  >({
    actionIdentifier: `TODO`,
    initialValue: null,
    selectStateFromRoot: (state: RootState) => selectStateFromRoot(state).error,
  });
  errorReducer.makeCase(isInitiateLoadingAction, () => null);
  errorReducer.makeCase(isSuccessLoadingAction, () => null);
  errorReducer.makeCase(isFailureLoadingAction, (_state, { payload }) => payload.error);

  /*
    Hooks
  */
  const useLoad = () => {
    const initiate = useInitiateLoadingAction();
    const load = useLoadFunction();
    const success = useSuccessLoading();
    const failure = useFailureLoading();
    return useCallback(
      async (...args: LoadArgs) => {
        initiate();
        try {
          await load(...args);
          success();
        } catch (error) {
          failure(error);
        }
      },
      [initiate, load, success, failure],
    );
  };

  /*
    Reducer
  */
  const reducer = combineReducers({
    isLoading: isLoadingReducer,
    isSuccess: isSuccessReducer,
    isFailure: isFailureReducer,
    error: errorReducer,
  });

  return {
    reducer,
    useLoad,
    useSelectIsLoading,
    useSelectDidLoadSucceed,
    useSelectDidLoadFail,
    useSelectError,
  };
};
