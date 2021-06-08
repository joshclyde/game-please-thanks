import { useCallback } from "react";

import { startFirebaseEventListening } from "@Firebase";
import { makeLoading } from "@ReduxUtils";

import { useSetIsAuthenticated } from "../value/hooks";

let isListening = false;
const useExecute = () => {
  const setValue = useSetIsAuthenticated();
  return useCallback(async () => {
    // making sure if the hook is used twice we only listen once. is this weird/bad?
    if (!isListening) {
      isListening = true;
      await startFirebaseEventListening(
        () => setValue(true),
        () => setValue(false),
      );
    }
  }, [setValue]);
};

const { useLoad: useLoadAuthentication, reducers: load } = makeLoading({
  START: `LOADING_AUTHENTICATION`,
  SUCCESS: `SUCCESSFUL_LOADING_AUTHENTICATION`,
  FAILURE: `ERROR_LOADING_AUTHENTICATION`,
  useExecute,
});

export const reducers = { load };
export { useLoadAuthentication };
