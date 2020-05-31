import * as React from "react";
import { FunctionComponent } from "react";
import injectSheet from "react-jss";
import { HeaderLink } from "./HeaderLink";

type Props = {
  classes: {
    container: string;
    discoBall: string;
    pageLink: string;
  };
  color?: string;
  disabled?: boolean;
};

const DumbHeader: FunctionComponent<Props> = ({ classes }) => (
  <div className={classes.container}>
    <HeaderLink href="/">Home</HeaderLink>
    <HeaderLink href="/bookmarks">Bookmarks</HeaderLink>
    <HeaderLink href="/flashcards">Flashcards</HeaderLink>
    {/* <HeaderLink href="/ukulele">Ukulele</HeaderLink> */}
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

export const Header = injectSheet(styles)(DumbHeader);
