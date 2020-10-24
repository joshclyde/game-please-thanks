import React, { FC, useState } from "react";

import { GodAbilityImage } from "./GodAbilityImage";
import { GodAbilityInformation } from "./GodAbilityInformation";

import "./index.css";

interface Props {
  godName: string;
}

const GodAbilitiesFC: FC<Props> = ({ godName }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className={`GodPageGodAbilitiesA`}>
      <div className={`GodPageGodAbilitiesB`}>
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
      </div>
      <GodAbilityInformation godName={godName} abilityIndex={currentIndex} />
    </div>
  );
};

export const GodAbilities = GodAbilitiesFC;
