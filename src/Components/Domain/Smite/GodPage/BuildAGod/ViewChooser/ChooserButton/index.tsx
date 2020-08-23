import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  State,
  makeActionCreateSmiteBuildAGod,
  makeActionSetBuildAGodGodName,
  selectSmiteBuildAGod,
  makeActionSetBuildAGodItem,
  makeActionSetBuildAGodView,
  selectSmiteBuildAGodView,
} from "@Redux";

interface Props {
  buildAGodKey: string;
  view: "god" | "item 0" | "item 1" | "item 2" | "item 3" | "item 4" | "item 5";
}

const mapDispatch = {
  setView: makeActionSetBuildAGodView,
};

const connector = connect(null, mapDispatch);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const ChooserButtonFC: FC<PropsForReals> = ({ setView, buildAGodKey, view }) => {
  return <button onClick={() => setView(buildAGodKey, view)}>{`Choose ${view}`}</button>;
};

export const ChooserButton = connector(ChooserButtonFC);
