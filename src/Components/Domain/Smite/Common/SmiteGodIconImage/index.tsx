import React, { FC } from "react";
import { State, selectGodIcon } from "@Redux";
import { connect, ConnectedProps } from "react-redux";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  godName: string;
}

const mapState = (state: State, { godName }: Props) => ({
  godIcon: selectGodIcon(state, godName),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const SmiteGodIconImageFC: FC<PropsForReals> = ({ godIcon, ...restProps }) => {
  return <img src={godIcon} {...restProps} />;
};

export const SmiteGodIconImage = connector(SmiteGodIconImageFC);
