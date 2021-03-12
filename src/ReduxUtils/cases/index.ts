import { makeUseDispatchAction } from "../makeUseDispatchAction";
import { GenericAction } from "../types";

/*
  cool way to do a string literal
  https://github.com/microsoft/TypeScript/issues/42644#issuecomment-774315112
*/
type StringLiteral<T> = T extends string ? (string extends T ? never : T) : never;

/*
  all the generics are type inferenced ❤️
*/
export const makeAction = <
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
  const isAction = (action: {
    type: string;
  }): action is ReturnType<typeof actionCreator> => action.type === type;
  const useDispatchAction = makeUseDispatchAction(actionCreator);
  return {
    // TODO: combine type and isAction?
    type,
    isAction,
    // TODO: will i ever need action creator if everything will be in hooks?
    actionCreator,
    useDispatchAction,
  };
};

/*
  Create a new case for a reducer.

  isAction: function that takes in an action and returns true/false whether the action is the correct action to reduce on
  reduce: function to reduce the state slice when isAcion returns true

  TODO: maybe makeCase can be inside makeAction? then we'll know what isAction is already and will only need the reduce.
  and then for specific makeActions (e.g. makeActionSetValue) it won't even need to take in the reduce since it should already know
  how to reduce it
*/
export const makeCase = <ValueType, Action extends GenericAction>(
  isAction: (action: { type: string; payload: object }) => action is Action,
  reduce: (state: ValueType, action: Action) => ValueType,
): [typeof isAction, typeof reduce] => [isAction, reduce];

/*
  Creates a new case for a set value action. Will create the reduce function to set the value for you so all you need is the isAction function.

  isAction: isAction: function that takes in an action and returns true/false whether the action is the correct action to reduce on
*/
interface GenericSetValueAction<StateSlice> {
  type: string;
  payload: { value: StateSlice };
}

export const makeActionSetValue = <ActionType, StateSlice>(
  type: StringLiteral<ActionType>,
) => {
  const makePayload = (value: StateSlice) => ({ value });
  return makeAction(type, makePayload);
};

// TODO: need to fix the generics to work
export const makeCaseSetValue = <
  StateSlice,
  Action extends GenericSetValueAction<StateSlice>
>(
  isAction: (action: GenericAction) => action is Action,
) => [isAction, (_state: StateSlice, action: Action) => action.payload.value];
