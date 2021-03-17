import { makeKeyValueFactory } from "@ReduxUtils";

import { RootState } from "../../types";

const {
  useCreateEntry: useCreateIconTabsEntry,
  useSetEntryValue: useSetIconTabsEntryValue,
  useSelectDoesEntryExist: useSelectDoesIconTabsEntryExist,
  useSelectEntryValue: useSelectIconTabsEntryValue,
  reducer,
} = makeKeyValueFactory<RootState, number>({
  actionIdentifier: `ICON_TABS`,
  defaultValue: 0,
  selectStateFromRoot: (state) => state.design.iconTabs,
});

export const reducers = { iconTabs: reducer };
export {
  useCreateIconTabsEntry,
  useSetIconTabsEntryValue,
  useSelectDoesIconTabsEntryExist,
  useSelectIconTabsEntryValue,
};
