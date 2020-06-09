export const SET_SMITE_SEARCH_TERM = "SET_SMITE_SEARCH_TERM";
export const makeActionSetSmiteSearchTerm = (searchTerm: string) => ({
  type: SET_SMITE_SEARCH_TERM,
  payload: {
    searchTerm,
  },
});

export type ActionSetSmiteSearchTerm = ReturnType<typeof makeActionSetSmiteSearchTerm>;

export type Actions = ActionSetSmiteSearchTerm;
