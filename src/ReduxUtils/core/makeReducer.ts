import { AnyAction, GenericReducer } from "../types";

export const makeReducer = <StateSlice>({
  initialState,
}: {
  initialState: StateSlice;
}) => {
  const caseMap: Record<string, GenericReducer<StateSlice>> = {};
  const reducer = (state: StateSlice = initialState, action: AnyAction): StateSlice => {
    const reduce = caseMap[action.type];
    return reduce ? reduce(state, action) : state;
  };

  const addCase = (caseToAdd: { type: string; reduce: GenericReducer<StateSlice> }) =>
    (caseMap[caseToAdd.type] = caseToAdd.reduce);
  return { reducer, addCase };
};
