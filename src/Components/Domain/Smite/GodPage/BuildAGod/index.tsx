import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  State,
  makeActionCreateSmiteBuildAGod,
  makeActionSetBuildAGodGodName,
  selectSmiteBuildAGod,
  makeActionSetBuildAGodItem,
  selectSmiteBuildAGodView,
} from "@Redux";
import { BuildAGodItemImage } from "./ItemImage";
import { BuildAGodGodIconImage } from "./GodIconImage";
import { EditItem } from "./EditItem";
import { ViewChooser } from "./ViewChooser";

interface Props {
  buildAGodKey: string;
}

const mapState = (state: State, { buildAGodKey }: Props) => {
  const hasBuildAGodBeenCreated = selectSmiteBuildAGod(state, buildAGodKey);
  return {
    hasBuildAGodBeenCreated,
    view: hasBuildAGodBeenCreated
      ? selectSmiteBuildAGodView(state, buildAGodKey)
      : undefined,
  };
};

const mapDispatch = {
  createBuildAGod: makeActionCreateSmiteBuildAGod,
  setGodName: makeActionSetBuildAGodGodName,
  setItem: makeActionSetBuildAGodItem,
};

const connector = connect(mapState, mapDispatch);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const BuildAGodFC: FC<PropsForReals> = ({
  buildAGodKey,
  createBuildAGod,
  setGodName,
  setItem,
  hasBuildAGodBeenCreated,
  view,
}) => {
  console.log(`JOSH: ${buildAGodKey}`);
  useEffect(() => {
    if (!hasBuildAGodBeenCreated) {
      createBuildAGod(buildAGodKey);
      setGodName(buildAGodKey, "Achilles");
      setItem(buildAGodKey, 1, 7526);
    }
  }, []);

  return hasBuildAGodBeenCreated ? (
    <>
      <div>
        <BuildAGodGodIconImage buildAGodKey={buildAGodKey} width={128} height={128} />
        <BuildAGodItemImage
          buildAGodKey={buildAGodKey}
          index={0}
          width={64}
          height={64}
        />
        <BuildAGodItemImage
          buildAGodKey={buildAGodKey}
          index={1}
          width={64}
          height={64}
        />
        <BuildAGodItemImage
          buildAGodKey={buildAGodKey}
          index={2}
          width={64}
          height={64}
        />
        <BuildAGodItemImage
          buildAGodKey={buildAGodKey}
          index={3}
          width={64}
          height={64}
        />
        <BuildAGodItemImage
          buildAGodKey={buildAGodKey}
          index={4}
          width={64}
          height={64}
        />
        <BuildAGodItemImage
          buildAGodKey={buildAGodKey}
          index={5}
          width={64}
          height={64}
        />
      </div>
      <ViewChooser buildAGodKey={buildAGodKey} />
      {view === "god" ? <div /> : null}
      {view === "item 0" ? <EditItem buildAGodKey={buildAGodKey} index={0} /> : null}
      {view === "item 1" ? <EditItem buildAGodKey={buildAGodKey} index={1} /> : null}
      {view === "item 2" ? <EditItem buildAGodKey={buildAGodKey} index={2} /> : null}
      {view === "item 3" ? <EditItem buildAGodKey={buildAGodKey} index={3} /> : null}
      {view === "item 4" ? <EditItem buildAGodKey={buildAGodKey} index={4} /> : null}
      {view === "item 5" ? <EditItem buildAGodKey={buildAGodKey} index={5} /> : null}
    </>
  ) : null;
};

export const BuildAGod = connector(BuildAGodFC);
