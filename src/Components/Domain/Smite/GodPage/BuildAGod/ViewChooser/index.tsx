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
import { ChooserButton } from "./ChooserButton";

interface Props {
  buildAGodKey: string;
}

const mapDispatch = {
  setView: makeActionSetBuildAGodView,
};

const connector = connect(null, mapDispatch);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const ViewChooserFC: FC<PropsForReals> = ({ buildAGodKey }) => {
  return (
    <>
      {/* TODO: make this a loop */}
      <ChooserButton view="god" buildAGodKey={buildAGodKey} />
      <ChooserButton view="item 0" buildAGodKey={buildAGodKey} />
      <ChooserButton view="item 1" buildAGodKey={buildAGodKey} />
      <ChooserButton view="item 2" buildAGodKey={buildAGodKey} />
      <ChooserButton view="item 3" buildAGodKey={buildAGodKey} />
      <ChooserButton view="item 4" buildAGodKey={buildAGodKey} />
      <ChooserButton view="item 5" buildAGodKey={buildAGodKey} />
    </>
  );
};

export const ViewChooser = connector(ViewChooserFC);
