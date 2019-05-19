import * as React from "react";
import { SFC } from "react";
import injectSheet from "react-jss";

type Props = {
  classes: {
    container: string;
    discoBall: string;
    pageLink: string;
  };
  question: string;
  answer: string;
};

const DumbFlashcard: SFC<Props> = ({ classes, question, answer }) => (
  <div className={classes.container}>
    HDflaksjdlf;jaslkdfjlkasdfklaskldfklasdjfkljaslkdfjlksj
  </div>
);

const styles = {
  container: {
    backgroundColor: "#D7BDE2",
    height: 32,
    display: "flex",
    // flexDirection: "row",
    // flexWrap: "nowrap",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  discoBall: {
    height: "100%",
    // opacity: 0.6,
  },
  pageLink: {
    height: "32",
    verticalAlign: "middle",
  },
};

export const Header = injectSheet(styles)(DumbFlashcard);
