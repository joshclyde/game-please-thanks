import { storiesOf } from "@storybook/react";
import React from "react";

import { ButtonIcon } from "../";
import { IconSearch } from "../../Icons";

const BiggerIcon = (props: any) => <IconSearch size="medium" {...props} />;

storiesOf(`Design/ButtonIcon`, module).add(`button icon`, () => (
  <>
    <ButtonIcon>
      <IconSearch />
    </ButtonIcon>
    <ButtonIcon>
      <BiggerIcon />
    </ButtonIcon>
  </>
));
