import { State } from "../../types";

export type StateJustShared = Pick<State, "shared">;

export const selectSharedFilter = (
  state: StateJustShared,
  key: string,
  filterName: string,
) => state.shared.filter?.[key]?.[filterName];
