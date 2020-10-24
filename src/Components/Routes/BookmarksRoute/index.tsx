import React, { FC } from "react";

import { Header } from "@Common";
import { BookmarksGrid } from "@Domain";

interface Props {}

export const BookmarksRoute: FC<Props> = () => (
  <div>
    <Header />
    <BookmarksGrid />
  </div>
);
