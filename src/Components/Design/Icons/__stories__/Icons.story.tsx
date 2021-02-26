import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

// eslint-disable-next-line import/no-namespace
import * as Icons from "../";

const sizes = [`small`, `medium`, `large`];
const colors = [`#0C0C0C`, `#E6DB78`];

const Div = styled.div`
  display: flex;
`;

storiesOf(`Design/Icons`, module).add(`icon`, () => (
  <Div>
    {Object.values(Icons).map((Icon) =>
      sizes.map((size) =>
        colors.map((color) => <Icon size={size as any} color={color} />),
      ),
    )}
  </Div>
));
