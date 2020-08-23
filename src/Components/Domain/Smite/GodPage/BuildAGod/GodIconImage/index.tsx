import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { SmiteGodIconImage } from "@SmiteCommon";
import { State, selectSmiteBuildAGodGodName } from "@Redux";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  buildAGodKey: string;
}

const mapState = (state: State, { buildAGodKey }: Props) => ({
  godName: selectSmiteBuildAGodGodName(state, buildAGodKey),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const BuildAGodGodIconImageFC: FC<PropsForReals> = ({ godName, ...restProps }) => {
  return godName ? <SmiteGodIconImage godName={godName} {...restProps} /> : null;
};

export const BuildAGodGodIconImage = connector(BuildAGodGodIconImageFC);
