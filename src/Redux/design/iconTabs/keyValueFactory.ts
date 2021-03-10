import { makeKeyValueFactory } from "../../factory";
import { State } from "../../types";

const {
  useCreateEntry: useCreateIconTabsEntry,
  useSetEntryValue: useSetIconTabsEntryValue,
  useSelectDoesEntryExist: useSelectDoesIconTabsEntryExist,
  useSelectEntryValue: useSelectIconTabsEntryValue,
  reducer,
} = makeKeyValueFactory<State, number>({
  actionIdentifier: `ICON_TABS`,
  defaultValue: 0,
  selectKeyValues: (state) => state.design.iconTabs,
});

export const reducers = { iconTabs: reducer };
export {
  useCreateIconTabsEntry,
  useSetIconTabsEntryValue,
  useSelectDoesIconTabsEntryExist,
  useSelectIconTabsEntryValue,
};
