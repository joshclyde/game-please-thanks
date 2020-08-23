import { cx } from "@Utils";
import * as React from "react";
import { FunctionComponent } from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
  classes: {
    container: string;
  };
  href: string;
  color?: string;
  disabled?: boolean;
};

const DumbHeaderLink: FunctionComponent<Props> = ({
  className,
  classes,
  href,
  children,
}) => (
  <Link className={cx(className, classes.container)} to={href}>
    {children}
  </Link>
);

const styles = {
  container: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    width: 100,
    height: `100%`,
    color: `white`,
    textDecoration: `none`, // remove underline
    borderStyle: `solid`,
    borderColor: `rgba(0, 0, 0, 0.2)`,
    borderWidth: `0px 2px 0px 0px`,

    "&:hover": {
      backgroundColor: `rgba(255, 255, 255, 0.3)`,
    },
    // "&:active": {
    //   backgroundColor: "rgba(255, 255, 255, 0.2)",
    //   // backgroundColor: "rgba(255, 255, 255, 0.2)",
    //   // outline: 0,
    // },
    "&:focus": {
      backgroundColor: `rgba(255, 255, 255, 0.3)`,
      // backgroundColor: "rgba(255, 255, 255, 0.3)",
      outline: `none`,
      // outline: "2px solid rgba(0, 0, 0, 0.2);",
      // backgroundColor: "rgba(255, 255, 255, 0.5)",
      // transitionDuration: "0s",
      // webkitTransitionDuration: "0s" /* Safari */,
      // transition: "outline 0s",
      // outline: "2px solid #B2B2FF;",
      // color: "#F7F5F2",
      // backgroundColor: "#B2B2FF",
      // border: "solid",
      // borderColor: "#B2B2FF",
    },
  },
};

export const HeaderLink = injectSheet(styles)(DumbHeaderLink);
