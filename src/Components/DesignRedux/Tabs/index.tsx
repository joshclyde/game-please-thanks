import React, { FC, useEffect, useCallback } from "react";

import { Tabs as DesignTabs } from "@Design";
import {
  useCreateIconTabsEntry,
  useSetIconTabsEntryValue,
  useSelectIconTabsEntryValue,
} from "@Redux";

interface IconTabsProps
  extends Omit<React.ComponentProps<typeof DesignTabs>, "onClickTab" | "index"> {
  tabsId: string;
}

// TODO: clean up this redux to not use IconTabs
const TabsFC: FC<IconTabsProps> = ({ tabsId, ...restProps }) => {
  const createIconTabsEntry = useCreateIconTabsEntry();
  useEffect(() => {
    createIconTabsEntry(tabsId);
  }, [createIconTabsEntry, tabsId]);
  const setIconTabsEntry = useSetIconTabsEntryValue();
  const onClickTab = useCallback(
    (index: number) => {
      setIconTabsEntry(tabsId, index);
    },
    [setIconTabsEntry, tabsId],
  );
  const currentIndex = useSelectIconTabsEntryValue(tabsId);
  return <DesignTabs onClickTab={onClickTab} index={currentIndex} {...restProps} />;
};

export const Tabs = TabsFC;
