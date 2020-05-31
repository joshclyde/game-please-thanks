import { Header } from "@Components/App/Header/Header";
import React, { FC } from "react";
import { BookmarksGrid } from "./BookmarksGrid";

type Props = {};

export const BookmarksRoute: FC<Props> = () => (
  <div>
    <Header />
    <BookmarksGrid />
  </div>
);
