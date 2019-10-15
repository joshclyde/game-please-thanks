import { storiesOf } from "@storybook/react";
import * as React from "react";
import Tile from "./Tile";
import TileWithMarkdown from "./TileWithMarkdown";

storiesOf("Design/Tile", module).add("tile", () => (
  <>
    <Tile />
    <Tile>A</Tile>
    <Tile>I am a Tile</Tile>
    <Tile>I am a disabled Tile</Tile>
    <Tile>
      I am a very very very long Tile<br />
      I am a very very very long Tile<br />
      I am a very very very long Tile<br />
      I am a very very very long Tile<br />
      I am a very very very long Tile<br />
      I am a very very very long Tile<br />
      I am a very very very long Tile<br />
      I am a very very very long Tile<br />
    </Tile>
    <TileWithMarkdown input="# This is a header\n\nAnd this is a paragraph" />
  </>
));
