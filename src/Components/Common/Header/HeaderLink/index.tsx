import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { cx } from "@Utils";

import "./index.css";

type Props = {
  className?: string;
  href: string;
  color?: string;
  disabled?: boolean;
};

const HeaderLinkFC: FunctionComponent<Props> = ({ className, href, children }) => (
  <Link className={cx(className, `HeaderLinkContainer`)} to={href}>
    {children}
  </Link>
);

export const HeaderLink = HeaderLinkFC;
