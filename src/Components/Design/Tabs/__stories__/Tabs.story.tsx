import { storiesOf } from "@storybook/react";
import React from "react";

import { Tabs } from "../";

const onClickTab = (index: number) => console.log(index);

storiesOf(`Design/Tabs`, module).add(`tabs`, () => (
  <>
    <Tabs names={[`Album`, `Artist`, `Song`]} index={0} onClickTab={onClickTab} />
    <Tabs names={[`Album`, `Artist`, `Song`]} index={1} onClickTab={onClickTab} />
    <Tabs names={[`Album`, `Artist`, `Song`]} index={2} onClickTab={onClickTab} />
  </>
));
