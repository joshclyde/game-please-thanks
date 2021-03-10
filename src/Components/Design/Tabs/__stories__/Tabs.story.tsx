import { storiesOf } from "@storybook/react";
import React from "react";

import { Tabs } from "../";

storiesOf(`Design/Tabs`, module).add(`tabs`, () => (
  <>
    <Tabs names={[`Album`, `Artist`, `Song`]} index={0} />
    <Tabs names={[`Album`, `Artist`, `Song`]} index={1} />
    <Tabs names={[`Album`, `Artist`, `Song`]} index={2} />
  </>
));
