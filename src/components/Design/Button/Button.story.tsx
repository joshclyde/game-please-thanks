import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button } from "./Button";

storiesOf("Design/Button", module).add("button", () => (
  <>
    <Button />
    <Button>A</Button>
    <Button>I am a button</Button>
    <Button disabled={true}>I am a disabled button</Button>
    <Button>I am a very very very long button</Button>
  </>
));
