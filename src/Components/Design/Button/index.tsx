import React, { FunctionComponent } from "react";
import injectSheet from "react-jss";

import { cx } from "@Utils";

type Props = {
  className?: string;
  classes: {
    button: string;
  };
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const BaseButton: FunctionComponent<Props> = ({
  className,
  classes,
  children,
  disabled,
  onClick,
}) => (
  <button className={cx(classes.button, className)} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

const styles = {
  button: {
    backgroundColor: `#F7F5F2`,
    border: `none`,
    color: `#313130`,
    padding: `8px 20px`,
    cursor: `pointer`,
    fontSize: 14,
    borderRadius: 8,
    transitionDuration: `0.2s`,
    webkitTransitionDuration: `0.2s` /* Safari */,
    "&:not(:disabled)": {
      "&:hover": {
        backgroundColor: `#DEDCD9`,
      },
      "&:active": {
        backgroundColor: `#C5C4C1`,
      },
      "&:focus": {
        transition: `outline 0s`,
        outline: `2px solid #B2B2FF;`,
      },
    },
    "&:disabled": {
      opacity: 0.4,
      cursor: `not-allowed`,
    },
  },
};

export const Button = injectSheet(styles)(BaseButton);
