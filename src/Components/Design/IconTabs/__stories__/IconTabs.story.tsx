import { storiesOf } from "@storybook/react";
import React from "react";

import { IconTabs } from "../";
import { IconGrid, IconList } from "../../Icons";

const onClickIcon = (index: number) => alert(`Clicked on icon with index ${index}!`);

storiesOf(`Design/IconTabs`, module).add(`icon tabs`, () => (
  <>
    <IconTabs icons={[IconGrid, IconList]} index={0} onClickIcon={onClickIcon} />
    <IconTabs icons={[IconGrid, IconList]} index={1} onClickIcon={onClickIcon} />
  </>
));
