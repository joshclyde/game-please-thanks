import React, { FC } from "react";

import { Tile } from "../Tile";
// TODO: having some sort of issue using `import`, but `require` seeems to work
// tslint:disable-next-line:no-var-requires
const ReactMarkdown = require(`react-markdown`);

type Props = {
  className?: string;
  input: string;
  onClick?: () => void;
  // color?: string;
};

const TileWithMarkdownFC: FC<Props> = ({ className, input, onClick }) => (
  <Tile className={className} onClick={onClick}>
    {/* {input} */}
    <ReactMarkdown source={input} />
  </Tile>
);

export const TileWithMarkdown = TileWithMarkdownFC;
