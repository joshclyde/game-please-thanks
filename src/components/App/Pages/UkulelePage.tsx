import * as React from "react";
import { SFC } from "react";
import { Header } from "../Header";
import { Ukulele } from "../Ukulele";

type Props = {};

export const UkulelePage: SFC<Props> = () => (
  <div>
    <Header />
    <Ukulele />
  </div>
);
