import React, { FC, useEffect, useCallback } from "react";

import { IconTabs as DesignIconTabs } from "@Design";
import {
  useCreateIconTabsEntry,
  useSetIconTabsEntryValue,
  useSelectIconTabsEntryValue,
} from "@Redux";

interface IconTabsProps
  extends Omit<React.ComponentProps<typeof DesignIconTabs>, "onClickIcon" | "index"> {
  iconTabsId: string;
}
const IconTabsFC: FC<IconTabsProps> = ({ iconTabsId, ...restProps }) => {
  const createIconTabsEntry = useCreateIconTabsEntry(iconTabsId);
  useEffect(() => {
    createIconTabsEntry();
  }, [createIconTabsEntry]);
  const setIconTabsEntry = useSetIconTabsEntryValue(iconTabsId);
  const onClickIcon = useCallback(
    (index: number) => {
      setIconTabsEntry(index);
    },
    [setIconTabsEntry],
  );
  const currentIndex = useSelectIconTabsEntryValue(iconTabsId);
  return <DesignIconTabs onClickIcon={onClickIcon} index={currentIndex} {...restProps} />;
};

export const IconTabs = IconTabsFC;
