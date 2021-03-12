import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  RootState,
  selectSmiteBuildAGodItemsLength,
  selectSmiteBuildAGodItem,
} from "@Redux";
import { SmiteItemImage } from "@SmiteCommon";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  buildAGodKey: string;
  index: number;
}

const mapState = (state: RootState, { buildAGodKey, index }: Props) => {
  let itemId;
  if (selectSmiteBuildAGodItemsLength(state, buildAGodKey) > index) {
    itemId = selectSmiteBuildAGodItem(state, buildAGodKey, index);
  }
  return { itemId };
};

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const BuildAGodItemImageFC: FC<PropsForReals> = ({
  buildAGodKey,
  itemId,
  ...restProps
}) => {
  return itemId ? (
    <SmiteItemImage itemId={itemId} {...restProps} />
  ) : (
    // TODO: do this better
    <img {...restProps} color="grey"></img>
  );
};

export const BuildAGodItemImage = connector(BuildAGodItemImageFC);
