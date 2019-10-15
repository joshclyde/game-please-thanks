import * as React from "react";
import { FunctionComponent } from "react";
import { Header } from "../Header";
import { Ukulele } from "../Ukulele";

type Props = {};

export const UkulelePage: FunctionComponent<Props> = () => (
  <div>
    <Header />
    <Ukulele />
  </div>
);
