import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { StringLiteral } from "@Types";

import { AnyAction } from "../types";

const makeUseDispatchAction = <T extends Array<any>>(
  // TODO change return type of actionCreator to not be any
  actionCreator: (...args: T) => AnyAction,
) => () => {
  const dispatch = useDispatch();
  return useCallback(
    (...args: T) => {
      dispatch(actionCreator(...args));
    },
    [dispatch],
  );
};

/*
  all the generics are type inferenced ❤️
*/
export const makeAction2 = <
  ActionType,
  ActionPayload extends object,
  MakePayloadArgs extends Array<any>
>(
  type: StringLiteral<ActionType>,
  makePayload: (...args: MakePayloadArgs) => ActionPayload,
) => {
  const actionCreator = (...args: MakePayloadArgs) => ({
    type,
    payload: makePayload(...args),
  });
  const useDispatchAction = makeUseDispatchAction(actionCreator);
  const makeCase = <StateSlice>(
    reduce: (state: StateSlice, action: ReturnType<typeof actionCreator>) => StateSlice,
  ) => ({
    type,
    reduce,
  });
  return {
    type,
    makeCase,
    useDispatchAction,
    actionCreator,
  };
};
