import { storiesOf } from "@storybook/react";
import React from "react";

import { TextInputWithIcon } from "../";
import { FormTextInput } from "../../FormTextInput";
import { IconSearch } from "../../Icons";

storiesOf(`Design/TextInputWithIcon`, module).add(`text input with icon`, () => (
  <>
    <TextInputWithIcon Input={FormTextInput} Icon={IconSearch} />
  </>
));
