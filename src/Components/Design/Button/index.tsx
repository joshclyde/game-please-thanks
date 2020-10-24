import React, { FC } from "react";

import { cx } from "@Utils";

import "./index.css";

interface Props {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const BaseButtonFC: FC<Props> = ({ className, children, disabled, onClick }) => (
  <button className={cx(`DesignButton`, className)} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export const Button = BaseButtonFC;
