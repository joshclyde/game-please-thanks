import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { State, selectSmiteItemImageUrl, selectSmiteItemDeviceName } from "@Redux";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  itemId: number;
}

const mapState = (state: State, { itemId }: Props) => ({
  imageUrl: selectSmiteItemImageUrl(state, itemId),
  deviceName: selectSmiteItemDeviceName(state, itemId),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const SmiteItemImageFC: FC<PropsForReals> = ({ imageUrl, deviceName, ...restProps }) => {
  return <img src={imageUrl} alt={deviceName} title={deviceName} {...restProps} />;
};

export const SmiteItemImage = connector(SmiteItemImageFC);
