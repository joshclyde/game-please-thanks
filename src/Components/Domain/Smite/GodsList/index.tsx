import React, { FC } from "react";
import { State, selectAllGodNames, selectSmiteSearchTerm } from "@Redux";
import { connect, ConnectedProps } from "react-redux";
import { GodsSearchBar } from "./GodsSearchBar";

import { GodOnGodsList } from "./GodOnGodsList";

import "./index.css";

const mapState = (state: State) => ({
  godNames: selectAllGodNames(state),
  searchTerm: selectSmiteSearchTerm(state),
});

const connector = connect(mapState);

interface Props {}

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const GodsListFC: FC<PropsForReals> = ({ godNames, searchTerm }) => {
  const filteredGodNames = godNames.filter((name) =>
    new RegExp(searchTerm, "i").test(name),
  );

  return (
    <div>
      <GodsSearchBar />
      <div className="GodsList">
        {filteredGodNames.map((name) => (
          <GodOnGodsList godName={name} key={name} />
        ))}
      </div>
    </div>
  );
};

export const GodsList = connector(GodsListFC);
