import React, { FC } from "react";

import { Tabs } from "@DesignRedux";

interface Props {
  className?: string;
}

// TODO: move tabsId to be a string
const TypeTabsFC: FC<Props> = ({ className }) => {
  return (
    <Tabs
      className={className}
      tabsId="explore-type-tabs"
      names={[`Album`, `Artist`, `Song`]}
    />
  );
};

export const TypeTabs = TypeTabsFC;
