import { State, selectGodData, selectAllItems } from "@Redux";
import React, { FC, useState, useCallback } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ItemBuild } from "./itemsBuild";
import { calculateBasicAttackDamage } from "./utils";

import "./index.css";

interface Props {
  godName: string;
}

const mapState = (state: State, { godName }: Props) => ({
  godData: selectGodData(state, godName),
  items: selectAllItems(state),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

/*

Basic Attacks
Base Damage + (Base Damage per lvl × God's lvl) + (100% of Physical Power OR 20% of Magical Power)

Damage = (100 × Unmitigated Damage)/(Protections + 100)

Actual Defense = (Protection × (1-%Reduction) - Flat Reduction) × (1-%Pen) - Flat Pen



*/

const GodStatsFC: FC<PropsForReals> = ({ godData, items, godName }) => {
  const [level, setLevel] = useState(0);
  const onChange = useCallback(
    (event) => {
      setLevel(event.target.value);
    },
    [setLevel],
  );

  return (
    <div>
      <br />
      <li>Level 0 Attack Speed: {godData.AttackSpeed}</li>
      <li>Attack Speed per Level: {godData.AttackSpeedPerLevel}</li>
      <li>Level 0 Physical Power: {godData.PhysicalPower}</li>
      <li>Physical Power per Level: {godData.PhysicalPowerPerLevel}</li>
      <br />
      <li>
        Level {level}
        <input type="range" min="0" max="20" value={level} step="1" onChange={onChange} />
        <li>Attack Speed: {godData.AttackSpeed + godData.AttackSpeedPerLevel * level}</li>
        <li>
          Physical Power: {godData.PhysicalPower + godData.PhysicalPowerPerLevel * level}
        </li>
        <li>
          Basic Attack Damage:{" "}
          {(calculateBasicAttackDamage({
            baseDamage: godData.PhysicalPower,
            baseDamagePerLevel: godData.PhysicalPowerPerLevel,
            physicalPower: 0,
            level,
          }) *
            100) /
            (19 + 100)}
        </li>
      </li>
      <ItemBuild buildKey={godName} godName={godName} />
    </div>
  );
};

export const GodStats = connector(GodStatsFC);
