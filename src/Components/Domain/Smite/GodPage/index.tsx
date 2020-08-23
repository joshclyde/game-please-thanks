import { State, selectGodCardUrl } from "@Redux";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import injectSheet from "react-jss";
import { GodCard } from "./GodCard";
import { GodAbilities } from "./GodAbilities";
import { GodStats } from "./GodStats";
import { BuildAGod } from "./BuildAGod";

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
    display: "flex",
    flexFlow: "row nowrap",
  },
};

const GodPageSmart = connector(injectSheet(styles)(GodPageFC));

export const GodPage: FC<{}> = () => {
  const { godName } = useParams();
  return <GodPageSmart godName={godName} />;
};
