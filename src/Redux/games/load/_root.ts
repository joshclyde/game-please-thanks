import { useCallback } from "react";

import { requestGames } from "@Api";
import { makeLoading } from "@ReduxUtils";

import { useSetGamesValue } from "../value/hooks";

const useExecute = () => {
  const setValue = useSetGamesValue();
  return useCallback(async () => {
    const value = await requestGames();
    setValue(value);
  }, [setValue]);
};

const { useLoad: useLoadGames, reducers: load } = makeLoading({
  START: `LOADING_GAMES`,
  SUCCESS: `SUCCESSFUL_LOADING_GAMES`,
  FAILURE: `ERROR_LOADING_GAMES`,
  useExecute,
});

export const reducers = { load };
export { useLoadGames };
