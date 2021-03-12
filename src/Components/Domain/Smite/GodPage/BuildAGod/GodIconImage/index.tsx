import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState, selectSmiteBuildAGodGodName } from "@Redux";
import { SmiteGodIconImage } from "@SmiteCommon";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  buildAGodKey: string;
}

const mapState = (state: RootState, { buildAGodKey }: Props) => ({
  godName: selectSmiteBuildAGodGodName(state, buildAGodKey),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const BuildAGodGodIconImageFC: FC<PropsForReals> = ({ godName, ...restProps }) => {
  return godName ? <SmiteGodIconImage godName={godName} {...restProps} /> : null;
};

export const BuildAGodGodIconImage = connector(BuildAGodGodIconImageFC);
