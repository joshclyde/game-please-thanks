import { RootState } from "../../types";

export type StateJustShared = Pick<RootState, "shared">;

export const selectSharedFilter = (
  state: StateJustShared,
  key: string,
  filterName: string,
) => state.shared.filter?.[key]?.[filterName];
