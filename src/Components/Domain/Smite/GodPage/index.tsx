import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { BuildAGod } from "./BuildAGod";
import { GodAbilities } from "./GodAbilities";
import { GodCard } from "./GodCard";
import { GodStats } from "./GodStats";

interface Props {
  godName: string;
}

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const GodPageFC: FC<Props> = ({ godName }) => {
  return (
    <div>
      <h1>{godName}</h1>
      <Container>
        <GodCard godName={godName} />
        <GodAbilities godName={godName} />
      </Container>
      <GodStats godName={godName} />
      <BuildAGod buildAGodKey={godName} />
    </div>
  );
};

export const GodPage: FC<{}> = () => {
  const { godName } = useParams<{ godName: string }>();
  return <GodPageFC godName={godName} />;
};
