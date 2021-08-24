import { useCallback } from "react";

import { makeAction } from "./makeAction";
import { makeReducer } from "./makeReducer";

export const makeLoading2 = <SuccessPayload, MetaPayload>({
  makeTypePrefix,
}: {
  makeTypePrefix: (status: string) => string;
}) => {
  /*
    Actions
  */
  const {
    useDispatchAction: useStart,
    makeCase: makeCaseStart,
  } = makeAction(makeTypePrefix(`PENDING`), (meta: MetaPayload) => ({ meta }));

  const { useDispatchAction: useSuccess, makeCase: makeCaseSuccess } = makeAction(
    makeTypePrefix(`SUCCESS`),
    (meta: MetaPayload, value: SuccessPayload) => ({
      value,
      meta,
    }),
  );

  const { useDispatchAction: useFailure, makeCase: makeCaseFailure } = makeAction(
    makeTypePrefix(`ERROR`),
    (meta: MetaPayload, error: Error) => ({
      meta,
      error: error.toString(),
    }),
  );

  /*
    Reducers
  */
  const { reducer: statusReducer, addCase: addCaseStatusReducer } = makeReducer({
    initialState: `NONE`,
  });
  addCaseStatusReducer(makeCaseStart(() => `PENDING`));
  addCaseStatusReducer(makeCaseSuccess(() => `SUCCESS`));
  addCaseStatusReducer(makeCaseFailure(() => `ERROR`));

  const { reducer: errorReducer, addCase: addCaseErrorReducer } = makeReducer<
    string | null
  >({ initialState: null });
  addCaseErrorReducer(makeCaseFailure((_state, action) => action.payload.error));

  /*
    Load function
  */
  const makeUseLoad = (
    useExecute: () => (metaPayload: MetaPayload) => Promise<SuccessPayload>,
  ) => () => {
    const start = useStart();
    const execute = useExecute();
    const success = useSuccess();
    const failure = useFailure();
    return useCallback(
      async (meta: MetaPayload) => {
        start(meta);
        try {
          const value = await execute(meta);
          success(meta, value);
        } catch (error) {
          failure(meta, error);
        }
      },
      [start, execute, success, failure],
    );
  };

  return {
    statusReducer,
    errorReducer,
    makeUseLoad,
    makeCaseStart,
    makeCaseSuccess,
    makeCaseFailure,
  };
};
