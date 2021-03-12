import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeCase } from "../cases";

interface FactoryArgs<RootState, ValueType> {
  actionIdentifier?: string;
  initialValue: ValueType;
  selectStateFromRoot: (state: RootState) => ValueType;
}

// TODO: get rid of this
export const makeFieldFactory = <State, ValueType>({
  // TODO: make actionIdentifier optional. maybe make a cases helper instead?
  actionIdentifier,
  initialValue,
  selectStateFromRoot,
}: FactoryArgs<State, ValueType>) => {
  /*
    Action Constants
  */
  const SET_VALUE = `SET_VALUE_${actionIdentifier}`;

  /*
    Action Creators
  */
  const makeActionSetValue = (value: ValueType) => ({
    type: SET_VALUE,
    payload: {
      value,
    },
  });

  /*
    Action Types
  */
  type ActionSetValue = ReturnType<typeof makeActionSetValue>;

  /*
    Action Hooks
  */
  const useSetValue = () => {
    const dispatch = useDispatch();
    return useCallback(
      (value: ValueType) => {
        dispatch(makeActionSetValue(value));
      },
      [dispatch],
    );
  };

  /*
    Reducers
  */
  const reduceSetValue = (state: ValueType, { payload }: ActionSetValue) => {
    const { value } = payload;
    return value;
  };
  let moreCases: Array<[any, any]> = []; // TODO: dont make this any
  const reducer = (state: ValueType = initialValue, action: any): ValueType => {
    const { type } = action;
    switch (type) {
      case SET_VALUE:
        return reduceSetValue(state, action as ActionSetValue);
    }

    const found2 = moreCases.find(([isAction]) => isAction(action));
    if (found2) {
      return found2[1](state, action);
    }
    return state;
  };

  reducer.makeCase = <Action extends { type: string; payload: object }>(
    isAction: (action: { type: string; payload: object }) => action is Action,
    reduce: (state: ValueType, action: Action) => ValueType,
  ) => moreCases.push(makeCase(isAction, reduce));

  /*
    Selectors
  */
  const selectValue = (state: State) => selectStateFromRoot(state);

  /*
    Selector Hooks
  */
  const useSelectValue = () => {
    return useSelector(selectValue);
  };

  return {
    makeActionSetValue,
    useSetValue,
    reducer,
    selectValue,
    useSelectValue,
  };
};
