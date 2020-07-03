export const SET_SHARED_FILTER = "SET_SHARED_FILTER";
export const makeActionSetSharedFilter = (
  key: string,
  filterName: string,
  value: boolean,
) => ({
  type: SET_SHARED_FILTER,
  payload: {
    key,
    filterName,
    value,
  },
});
export type ActionSetSharedFilter = ReturnType<typeof makeActionSetSharedFilter>;

export type Actions = ActionSetSharedFilter;
