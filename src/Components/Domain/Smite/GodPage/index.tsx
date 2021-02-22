import React, { FC } from "react";
import { useParams } from "react-router-dom";

import { BuildAGod } from "./BuildAGod";
import { GodAbilities } from "./GodAbilities";
import { GodCard } from "./GodCard";
import { GodStats } from "./GodStats";

import "./index.css";

interface Props {
  godName: string;
}

const GodPageFC: FC<Props> = ({ godName }) => {
  return (
    <div>
      <h1>{godName}</h1>
      <div className={`SmiteGodPage`}>
        <GodCard godName={godName} />
        <GodAbilities godName={godName} />
      </div>
      <GodStats godName={godName} />
      <BuildAGod buildAGodKey={godName} />
    </div>
  );
};

export const GodPage: FC<{}> = () => {
  const { godName } = useParams<{ godName: string }>();
  return <GodPageFC godName={godName} />;
};
