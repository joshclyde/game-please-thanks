import React, { FC } from "react";
import styled from "styled-components";

import { HeaderLink } from "./HeaderLink";

const Line = styled.div`
  background-color: #f885cf;
  height: 4px;
`;

const Container = styled.div`
  background-color: black;
  height: 42px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderFC: FC<{}> = () => (
  <>
    <Line />
    <Container>
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/bookmarks">Bookmarks</HeaderLink>
      <HeaderLink href="/flashcards">Flashcards</HeaderLink>
      <HeaderLink href="/smite/gods">Smite</HeaderLink>
      <HeaderLink href="/schedule">Schedule</HeaderLink>
      <HeaderLink href="/music">Music</HeaderLink>
    </Container>
  </>
);

export const Header = HeaderFC;
