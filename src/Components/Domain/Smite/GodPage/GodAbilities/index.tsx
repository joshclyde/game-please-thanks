import React, { FC, useState } from "react";
import styled from "styled-components";

import { GodAbilityImage } from "./GodAbilityImage";
import { GodAbilityInformation } from "./GodAbilityInformation";

interface Props {
  godName: string;
}

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const ContainerImages = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const GodAbilitiesFC: FC<Props> = ({ godName }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <Container>
      <ContainerImages>
        <GodAbilityImage
          godName={godName}
          abilityIndex={1}
          onClick={() => setCurrentIndex(1)}
          width={64}
          height={64}
        />
        <GodAbilityImage
          godName={godName}
          abilityIndex={2}
          onClick={() => setCurrentIndex(2)}
          width={64}
          height={64}
        />
        <GodAbilityImage
          godName={godName}
          abilityIndex={3}
          onClick={() => setCurrentIndex(3)}
          width={64}
          height={64}
        />
        <GodAbilityImage
          godName={godName}
          abilityIndex={4}
          onClick={() => setCurrentIndex(4)}
          width={64}
          height={64}
        />
        <GodAbilityImage
          godName={godName}
          abilityIndex={5}
          onClick={() => setCurrentIndex(5)}
          width={64}
          height={64}
        />
      </ContainerImages>
      <GodAbilityInformation godName={godName} abilityIndex={currentIndex} />
    </Container>
  );
};

export const GodAbilities = GodAbilitiesFC;
