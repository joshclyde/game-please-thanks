import React, { FC } from "react";

import { Tile } from "../Tile";
// TODO: having some sort of issue using `import`, but `require` seeems to work
const ReactMarkdown = require(`react-markdown`);

interface Props {
  className?: string;
  input: string;
  onClick?: () => void;
}

const TileWithMarkdownFC: FC<Props> = ({ className, input, onClick }) => (
  <Tile className={className} onClick={onClick}>
    <ReactMarkdown source={input} />
  </Tile>
);

export const TileWithMarkdown = TileWithMarkdownFC;
