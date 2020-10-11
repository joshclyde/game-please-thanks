import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  State,
  selectSmiteBuildAGodItemsLength,
  selectSmiteBuildAGodItem,
  makeActionSetBuildAGodItem,
} from "@Redux";
import { ItemSearch } from "@SmiteCommon";

interface Props {
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

const mapDispatch = {
  setBuildAGodItem: makeActionSetBuildAGodItem,
};

const connector = connect(mapState, mapDispatch);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const EditItemFC: FC<PropsForReals> = ({ buildAGodKey, index, setBuildAGodItem }) => {
  return (
    <ItemSearch
      entityKey={`${buildAGodKey}-${index}`}
      onClickItemImage={(itemId: number) => setBuildAGodItem(buildAGodKey, index, itemId)}
    />
  );
};

export const EditItem = connector(EditItemFC);
