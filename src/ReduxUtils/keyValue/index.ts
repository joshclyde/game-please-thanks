import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

interface FactoryArgs<State, EntryValue> {
  actionIdentifier: string;
  defaultValue?: EntryValue;
  selectStateFromRoot: (state: State) => Record<string, EntryValue>;
}

// TODO: change this
export const makeKeyValueFactory = <State, EntryValue>({
  actionIdentifier,
  defaultValue,
  selectStateFromRoot,
}: FactoryArgs<State, EntryValue>) => {
  /*
    Action Constants
  */
  const CREATE_ENTRY = `CREATE_ENTRY_${actionIdentifier}`;
  const SET_ENTRY_VALUE = `SET_ENTRY_VALUE_${actionIdentifier}`;

  /*
    Action Creators
  */
  const makeActionCreateEntry = (entryId: string, entryValue?: EntryValue) => ({
    type: CREATE_ENTRY,
    payload: {
      entryId,
      entryValue,
    },
  });
  const makeActionSetEntryValue = (entryId: string, entryValue: EntryValue) => ({
    type: SET_ENTRY_VALUE,
    payload: {
      entryId,
      entryValue,
    },
  });

  /*
    Action Types
  */
  type ActionCreateEntry = ReturnType<typeof makeActionCreateEntry>;
  type ActionSetEntry = ReturnType<typeof makeActionSetEntryValue>;

  /*
    Action Hooks
  */
  const useCreateEntry = () => {
    const dispatch = useDispatch();
    return useCallback(
      (entryId: string) => {
        dispatch(makeActionCreateEntry(entryId));
      },
      [dispatch],
    );
  };
  const useSetEntryValue = () => {
    const dispatch = useDispatch();
    return useCallback(
      (entryId: string, entryValue: EntryValue) => {
        dispatch(makeActionSetEntryValue(entryId, entryValue));
      },
      [dispatch],
    );
  };

  /*
    Reducers
  */
  const reduceCreateEntry = (
    state: Record<string, EntryValue>,
    { payload }: ActionCreateEntry,
  ) => {
    const { entryId, entryValue } = payload;
    return {
      ...state,
      [entryId]: entryValue || defaultValue,
    };
  };
  const reduceSetEntryValue = (
    state: Record<string, EntryValue>,
    { payload }: ActionSetEntry,
  ) => {
    const { entryId, entryValue } = payload;
    return {
      ...state,
      [entryId]: entryValue,
    };
  };
  const reducer = (
    state: Record<string, EntryValue> = {},
    action: any,
  ): Record<string, EntryValue> => {
    const { type } = action;
    switch (type) {
      case CREATE_ENTRY:
        return reduceCreateEntry(state, action as ActionCreateEntry);
      case SET_ENTRY_VALUE:
        return reduceSetEntryValue(state, action as ActionSetEntry);
    }
    return state;
  };

  /*
    Selectors
  */
  const selectDoesEntryExist = (state: State, entryId: string) =>
    Boolean(selectStateFromRoot(state)?.[entryId]);
  const selectEntryValue = (state: State, entryId: string) =>
    selectStateFromRoot(state)?.[entryId];
  const makeSelectDoesEntryExist = (entryId: string) => (state: State) =>
    selectDoesEntryExist(state, entryId);
  const makeSelectEntryValue = (entryId: string) => (state: State) =>
    selectEntryValue(state, entryId);

  /*
    Selector Hooks
  */
  const useSelectDoesEntryExist = (entryId: string) => {
    const selector = useMemo(() => makeSelectDoesEntryExist(entryId), [entryId]);
    return useSelector(selector);
  };
  const useSelectEntryValue = (entryId: string) => {
    const selector = useMemo(() => makeSelectEntryValue(entryId), [entryId]);
    return useSelector(selector);
  };

  return {
    makeActionCreateEntry,
    makeActionSetEntryValue,
    reducer,
    selectDoesEntryExist,
    selectEntryValue,
    useCreateEntry,
    useSetEntryValue,
    useSelectDoesEntryExist,
    useSelectEntryValue,
  };
};
