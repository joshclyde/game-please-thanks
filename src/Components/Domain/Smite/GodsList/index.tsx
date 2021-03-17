import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";

import { RootState, selectAllGodNames, selectSmiteSearchTerm } from "@Redux";

import { GodOnGodsList } from "./GodOnGodsList";
import { GodsSearchBar } from "./GodsSearchBar";

const mapState = (state: RootState) => ({
  godNames: selectAllGodNames(state),
  searchTerm: selectSmiteSearchTerm(state),
});

const connector = connect(mapState);

interface Props {}

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const GodsListFC: FC<PropsForReals> = ({ godNames, searchTerm }) => {
  const filteredGodNames = godNames.filter((name) =>
    new RegExp(searchTerm, `i`).test(name),
  );

  return (
    <div>
      <GodsSearchBar />
      <Container>
        {filteredGodNames.map((name) => (
          <GodOnGodsList godName={name} key={name} />
        ))}
      </Container>
    </div>
  );
};

export const GodsList = connector(GodsListFC);
