import React, { FC } from "react";

import { Header } from "@Common";
import { BookmarksGrid } from "@Domain";

type Props = {};

export const BookmarksRoute: FC<Props> = () => (
  <div>
    <Header />
    <BookmarksGrid />
  </div>
);
