import React, { FunctionComponent } from "react";

// TODO: having some sort of issue using `import`, but `require` seeems to work
import { Tile } from "../Tile";
// import injectSheet from "react-jss";
// tslint:disable-next-line:no-var-requires
const ReactMarkdown = require(`react-markdown`);

type Props = {
  className?: string;
  input: string;
  onClick?: () => void;
  // [x: string]: any;
  // classes: {
  //   container: string;
  // };
  // color?: string;
};

// const input = "# This is a header\n\nAnd this is a paragraph";

const TileWithMarkdown: FunctionComponent<Props> = ({ className, input, onClick }) => (
  <Tile className={className} onClick={onClick}>
    {/* {input} */}
    <ReactMarkdown source={input} />
  </Tile>
);

// const styles = {
//   container: {
//     backgroundColor: "#F7F5F2",
//     border: "none",
//     color: "#313130",
//     padding: "8px 20px",
//     fontSize: 14,
//     borderRadius: 30,
//   },
// };

// const TileWithMarkdownWithStyles = injectSheet(styles)(TileWithMarkdown);

export { TileWithMarkdown };
