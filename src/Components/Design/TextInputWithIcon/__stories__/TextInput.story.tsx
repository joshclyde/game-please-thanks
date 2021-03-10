import { storiesOf } from "@storybook/react";
import React from "react";

import { TextInputWithIcon } from "../";
import { IconSearch } from "../../Icons";
import { TextInput } from "../../TextInput";

storiesOf(`Design/TextInputWithIcon`, module).add(`text input with icon`, () => (
  <>
    <TextInputWithIcon Input={TextInput} Icon={IconSearch} />
  </>
));
