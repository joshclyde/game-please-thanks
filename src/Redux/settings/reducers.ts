import { makeReducer } from "@ReduxUtils";

import { SettingsState } from "./types";

const initialState: SettingsState = {
  currentFriendGroupId: `me`,
};
const { reducer: settings, addCase } = makeReducer({ initialState });

export const reducers = { settings };
