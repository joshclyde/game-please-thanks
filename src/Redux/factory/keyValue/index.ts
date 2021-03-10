import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

export type KeyValue<T> = Record<string, T>;

interface FactoryArgs<State, EntryValue> {
  actionIdentifier: string;
  defaultValue: EntryValue;
  selectKeyValues: (state: State) => KeyValue<EntryValue>;
}

export const makeKeyValueFactory = <State, EntryValue>({
  actionIdentifier,
  defaultValue,
  selectKeyValues,
}: FactoryArgs<State, EntryValue>) => {
  type StateSlice = KeyValue<EntryValue>;

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
  type Actions = ActionCreateEntry | ActionSetEntry;

  /*
    Action Hooks
  */
  const useCreateEntry = (entryId: string) => {
    const dispatch = useDispatch();
    return useCallback(() => {
      dispatch(makeActionCreateEntry(entryId));
    }, [dispatch, entryId]);
  };
  const useSetEntryValue = (entryId: string) => {
    const dispatch = useDispatch();
    return useCallback(
      (entryValue: EntryValue) => {
        dispatch(makeActionSetEntryValue(entryId, entryValue));
      },
      [dispatch, entryId],
    );
  };

  /*
    Reducers
  */
  const reduceCreateEntry = (state: any, { payload }: ActionCreateEntry) => {
    const { entryId, entryValue } = payload;
    return {
      ...state,
      [entryId]: entryValue || defaultValue,
    };
  };
  const reduceSetEntryValue = (state: any, { payload }: ActionSetEntry) => {
    const { entryId, entryValue } = payload;
    return {
      ...state,
      [entryId]: entryValue,
    };
  };
  const reducer = (state: StateSlice = {}, action: any): StateSlice => {
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
    Boolean(selectKeyValues(state)?.[entryId]);
  const selectEntryValue = (state: State, entryId: string) =>
    selectKeyValues(state)?.[entryId];
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
