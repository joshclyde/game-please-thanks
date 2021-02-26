import { storiesOf } from "@storybook/react";
import React from "react";

import { Tab } from "../";

storiesOf(`Design/Tab`, module).add(`tab`, () => (
  <>
    <Tab name={`Album`} isSelected={true} />
    <Tab name={`Album`} isSelected={false} />
  </>
));
