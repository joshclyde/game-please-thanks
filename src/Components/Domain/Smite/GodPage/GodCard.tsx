import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState, selectGodCardUrl } from "@Redux";

interface Props {
  godName: string;
}

const mapState = (state: RootState, { godName }: Props) => ({
  godCardUrl: selectGodCardUrl(state, godName),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const GodCardFC: FC<PropsForReals> = ({ godCardUrl }) => {
  return <img src={godCardUrl} width={180} height={335} />;
};

export const GodCard = connector(GodCardFC);
