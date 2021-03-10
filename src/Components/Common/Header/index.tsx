import React, { FC } from "react";
import styled from "styled-components";

import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";

const Line = styled.div`
  background-color: #e6db78;
  height: 2px;
`;

const Container = styled.div`
  background-color: #0d0d0d;
  height: 48px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  margin-left: 32px;
`;

const HeaderFC: FC<{}> = () => (
  <>
    <Container>
      <StyledLogo />
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/explore">Explore</HeaderLink>
      <HeaderLink href="/bookmarks">Bookmarks</HeaderLink>
      <HeaderLink href="/flashcards">Flashcards</HeaderLink>
      <HeaderLink href="/smite/gods">Smite</HeaderLink>
      <HeaderLink href="/schedule">Schedule</HeaderLink>
      <HeaderLink href="/music">Music</HeaderLink>
    </Container>
    <Line />
  </>
);

export const Header = HeaderFC;
