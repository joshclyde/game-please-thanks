import * as React from "react";
import { SFC } from "react";
import { Album } from "../Album";
import { Header } from "../Header";

type Props = {};

export const AlbumPage: SFC<Props> = () => (
  <div>
    <Header />
    <Album />
  </div>
);
