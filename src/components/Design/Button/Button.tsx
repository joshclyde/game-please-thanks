import * as React from "react";
import { SFC } from "react";
import injectSheet from "react-jss";

type Props = {
  classes: {
    button: string;
  };
  color?: string;
  disabled?: boolean;
};

const DumbButton: SFC<Props> = ({ classes, children, disabled }) => (
  <button className={classes.button} disabled={disabled}>
    {children}
  </button>
);

const styles = {
  button: {
    backgroundColor: "#F7F5F2",
    border: "none",
    color: "#313130",
    padding: "8px 20px",
    cursor: "pointer",
    fontSize: 14,
    borderRadius: 30,
    transitionDuration: "0.2s",
    webkitTransitionDuration: "0.2s" /* Safari */,
    "&:not(:disabled)": {
      "&:hover": {
        backgroundColor: "#DEDCD9",
      },
      "&:active": {
        backgroundColor: "#C5C4C1",
      },
      "&:focus": {
        // transitionDuration: "0s",
        // webkitTransitionDuration: "0s" /* Safari */,
        // outline: 0,
        transition: "outline 0s",
        outline: "2px solid #B2B2FF;",
        // color: "#F7F5F2",
        // backgroundColor: "#B2B2FF",
        // border: "solid",
        // borderColor: "#B2B2FF",
      },
    },
    "&:disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
};

export const Button =  injectSheet(styles)(DumbButton);
