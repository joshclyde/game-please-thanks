// I think I like this name?
export interface AnyAction {
  type: string;
  payload: object;
}

export interface GenericAction<Payload extends object> extends AnyAction {
  payload: Payload;
}

export type AnyReducer = (state: any, action: AnyAction) => any;

export type GenericReducer<StateSlice> = (
  state: StateSlice,
  action: AnyAction,
) => StateSlice;

export interface LoadingState {
  isPending: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  error: Error;
}
