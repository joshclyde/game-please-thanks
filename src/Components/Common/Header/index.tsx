import React, { FC } from "react";

import { HeaderLink } from "./HeaderLink";

import "./index.css";

const HeaderFC: FC<{}> = () => (
  <>
    <div className="HeaderDisplayLine" />
    <div className="HeaderContainer">
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/bookmarks">Bookmarks</HeaderLink>
      <HeaderLink href="/flashcards">Flashcards</HeaderLink>
      <HeaderLink href="/smite/gods">Smite</HeaderLink>
      <HeaderLink href="/schedule">Schedule</HeaderLink>
      <HeaderLink href="/music">Music</HeaderLink>
    </div>
  </>
);

export const Header = HeaderFC;
