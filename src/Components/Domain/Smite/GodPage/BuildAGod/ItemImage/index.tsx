import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { SmiteItemImage } from "@SmiteCommon";
import { State, selectSmiteBuildAGodItemsLength, selectSmiteBuildAGodItem } from "@Redux";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  buildAGodKey: string;
  index: number;
}

const mapState = (state: State, { buildAGodKey, index }: Props) => {
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
