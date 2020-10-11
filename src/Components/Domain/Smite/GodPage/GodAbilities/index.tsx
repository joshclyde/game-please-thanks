import React, { FC, useState } from "react";
import injectSheet from "react-jss";

import { GodAbilityImage } from "./GodAbilityImage";
import { GodAbilityInformation } from "./GodAbilityInformation";

interface Props {
  godName: string;
  classes: {
    a: string;
    b: string;
  };
}

const GodAbilitiesFC: FC<Props> = ({ godName, classes }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className={classes.a}>
      <div className={classes.b}>
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

const styles = {
  a: {
    display: `flex`,
    flexFlow: `row nowrap`,
  },
  b: {
    display: `flex`,
    flexFlow: `column nowrap`,
  },
};

export const GodAbilities = injectSheet(styles)(GodAbilitiesFC);
