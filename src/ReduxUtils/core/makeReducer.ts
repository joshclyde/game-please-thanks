import { AnyAction, GenericReducer } from "../types";

export const makeReducer = <StateSlice>({
  initialState,
}: {
  initialState: StateSlice;
}) => {
  // TODO: i'd prefer to not have this as any
  const caseMap: Record<string, GenericReducer<StateSlice, any>> = {};
  const reducer = (state: StateSlice = initialState, action: AnyAction): StateSlice => {
    const reduce = caseMap[action.type];
    return reduce ? reduce(state, action) : state;
  };

  const addCase = (caseToAdd: {
    type: string;
    reduce: GenericReducer<StateSlice, any>;
  }) => {
    caseMap[caseToAdd.type] = caseToAdd.reduce;
  };
  return { reducer, addCase };
};
