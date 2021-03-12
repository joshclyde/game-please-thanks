import { makeCase } from "../cases";
import { GenericAction } from "../types";

// TODO: should makeReducer know where it is within RootState? currently it does not
export const makeReducer = <StateSlice>({
  initialState,
}: {
  initialState: StateSlice;
}) => {
  let cases: Array<[(action: GenericAction) => boolean, any]> = []; // TODO: dont make this any. already had a bug cuz this wasnt typed.
  const reducer = (
    state: StateSlice = initialState,
    action: GenericAction,
  ): StateSlice => {
    // TODO: seems inefficient to have the isAction functions when i could instead just have a map with action types
    const caseFound = cases.find(([isAction]) => isAction(action));
    return caseFound ? caseFound[1](state, action) : state;
  };

  reducer.makeCase = <Action extends GenericAction>(
    isAction: (action: GenericAction) => action is Action,
    reduce: (state: StateSlice, action: Action) => StateSlice,
  ) => cases.push(makeCase(isAction, reduce));
  // TODO: dont do bad typing like this
  reducer.addCase = (caseToAdd: any) => cases.push(caseToAdd);

  return reducer;
};
