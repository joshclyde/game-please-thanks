import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const makeUseDispatchAction = <T extends Array<any>>(
  // TODO change return type of actionCreator to not be any
  actionCreator: (...args: T) => any,
) => () => {
  const dispatch = useDispatch();
  return useCallback(
    (...args: T) => {
      return dispatch(actionCreator(...args));
    },
    [dispatch],
  );
};
