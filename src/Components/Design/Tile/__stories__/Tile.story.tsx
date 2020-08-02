import React from "react";
import { storiesOf } from "@storybook/react";
import { Tile } from "../";

storiesOf("Design/Tile", module).add("tile", () => (
  <>
    <Tile />
    <Tile>A</Tile>
    <Tile>I am a Tile</Tile>
    <Tile>I am a disabled Tile</Tile>
    <Tile>
      I am a very very very long Tile
      <br />
      I am a very very very long Tile
      <br />
      I am a very very very long Tile
      <br />
      I am a very very very long Tile
      <br />
      I am a very very very long Tile
      <br />
      I am a very very very long Tile
      <br />
      I am a very very very long Tile
      <br />
      I am a very very very long Tile
      <br />
    </Tile>
  </>
));
