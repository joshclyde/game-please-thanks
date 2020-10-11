import React, { FC } from "react";
import injectSheet from "react-jss";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";

import { State, selectGodCardUrl } from "@Redux";

import { BuildAGod } from "./BuildAGod";
import { GodAbilities } from "./GodAbilities";
import { GodCard } from "./GodCard";
import { GodStats } from "./GodStats";

interface Props {
  godName: string;
  // TODO: fix why classes are being thought of as a needed prop when using GodPageSmart
  classes?: {
    godCardAndAbilitiesContainer: string;
  };
}

const mapState = (state: State, { godName }: Props) => ({
  godCardUrl: selectGodCardUrl(state, godName),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const GodPageFC: FC<PropsForReals> = ({ godName, classes }) => {
  console.log(`HEY: ${godName}`);
  return (
    <div>
      <h1>{godName}</h1>
      <div className={classes.godCardAndAbilitiesContainer}>
        <GodCard godName={godName} />
        <GodAbilities godName={godName} />
      </div>
      <GodStats godName={godName} />
      <BuildAGod buildAGodKey={godName} />
    </div>
  );
};

const styles = {
  godCardAndAbilitiesContainer: {
    display: `flex`,
    flexFlow: `row nowrap`,
  },
};

const GodPageSmart = connector(injectSheet(styles)(GodPageFC));

export const GodPage: FC<{}> = () => {
  const { godName } = useParams();
  return <GodPageSmart godName={godName} />;
};
