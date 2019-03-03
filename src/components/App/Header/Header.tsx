import * as React from "react";
import { SFC } from "react";
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

const DumbHeader: SFC<Props> = ({ classes }) => (
  <div className={classes.container}>
    <HeaderLink href="/">Home</HeaderLink>
    <HeaderLink href="/albums">Albums</HeaderLink>
    <HeaderLink href="/hello">Hello</HeaderLink>
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
