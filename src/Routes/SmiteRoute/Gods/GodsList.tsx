import React, { FC } from "react";
import { State, selectAllGodNames } from "@Redux";
import { connect, ConnectedProps } from "react-redux";

import { GodOnGodsList } from "./GodOnGodsList";

const mapState = (state: State) => ({
  godNames: selectAllGodNames(state),
});

const connector = connect(mapState);

interface Props {}

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const GodsListFC: FC<PropsForReals> = ({ godNames }) => {
  return <div>{godNames.map((name) => <GodOnGodsList godName={name} />)}</div>;
};

export const GodsList = connector(GodsListFC);
