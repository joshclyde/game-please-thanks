import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  State,
  selectGodAbilityImageUrl,
  selectGodAbilityName,
  selectGodAbilityCooldown,
  selectGodAbilityCost,
  selectGodAbilityDescription,
  selectGodAbilityStats,
  selectGodAbilityStatsMore,
} from "@Redux";

interface Props {
  godName: string;
  abilityIndex: number;
}

const mapState = (state: State, { godName, abilityIndex }: Props) => ({
  abilityImageUrl: selectGodAbilityImageUrl(state, godName, abilityIndex),
  name: selectGodAbilityName(state, godName, abilityIndex),
  cooldown: selectGodAbilityCooldown(state, godName, abilityIndex),
  cost: selectGodAbilityCost(state, godName, abilityIndex),
  description: selectGodAbilityDescription(state, godName, abilityIndex),
  stats: selectGodAbilityStats(state, godName, abilityIndex),
  moreStats: selectGodAbilityStatsMore(state, godName, abilityIndex),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const calcText = (abilityIndex: number) => {
  if (abilityIndex === 5) {
    return `Passive`;
  }
  if (abilityIndex === 4) {
    return `Ultimate`;
  }
  return `Ability ${abilityIndex}`;
};

const GodAbilityInformationFC: FC<PropsForReals> = ({
  name,
  abilityIndex,
  cooldown,
  cost,
  description,
  stats,
  moreStats,
}) => {
  return (
    <div>
      <h2>
        {calcText(abilityIndex)}: {name}
      </h2>
      <p>{description}</p>
      <ul>
        <li>Cooldown: {cooldown}</li>
        <li>Cost: {cost} mana</li>
        {stats.map(({ description, value }) => {
          return (
            <li>
              {description} {value}
            </li>
          );
        })}
        {moreStats.map(({ description, value }) => {
          return (
            <li>
              {description} {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const GodAbilityInformation = connector(GodAbilityInformationFC);
