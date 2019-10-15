import * as React from "react";
import { FunctionComponent } from "react";
import { Album } from "../Album";
import { Header } from "../Header";

type Props = {};

export const AlbumPage: FunctionComponent<Props> = () => (
  <div>
    <Header />
    <Album />
  </div>
);
