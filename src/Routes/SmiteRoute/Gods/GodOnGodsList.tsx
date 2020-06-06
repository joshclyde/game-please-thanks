import React, { FC } from "react";
import { State, selectGodIcon } from "@Redux";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

interface Props {
  godName: string;
}

const mapState = (state: State, { godName }: Props) => ({
  godIcon: selectGodIcon(state, godName),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const GodOnGodsListFC: FC<PropsForReals> = ({ godName, godIcon }) => {
  return (
    <Link to={`/smite/gods/${godName}`}>
      <img src={godIcon} width="64" height="64" />
    </Link>
  );
};

export const GodOnGodsList = connector(GodOnGodsListFC);
