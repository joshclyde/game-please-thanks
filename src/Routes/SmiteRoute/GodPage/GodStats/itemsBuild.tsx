import { Checkbox } from "@Components/Shared/Filter/Checkbox";
import { State, selectGodData, selectAllItems, selectSharedFilter } from "@Redux";
import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

interface Props {
  godName: string;
  buildKey: string;
}

const mapState = (state: State, { godName, buildKey }: Props) => ({
  godData: selectGodData(state, godName),
  items: selectAllItems(state),
  isAttackSpeed: selectSharedFilter(state, buildKey, "isAttackSpeed"),
  isPhysicalPower: selectSharedFilter(state, buildKey, "isPhysicalPower"),
  isPhysicalPenetration: selectSharedFilter(state, buildKey, "isPhysicalPenetration"),
  isPhysicalLifesteal: selectSharedFilter(state, buildKey, "isPhysicalLifesteal"),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const ItemBuildFC: FC<PropsForReals> = ({
  items,
  isAttackSpeed,
  isPhysicalPower,
  isPhysicalPenetration,
  isPhysicalLifesteal,
  godName,
}) => {
  const finalItems = items.filter(
    ({ ActiveFlag, ItemTier, ItemDescription, Type }) =>
      ActiveFlag === "y" &&
      ItemTier === 3 &&
      !ItemDescription.Menuitems.some(({ Description }) =>
        ["Magical Power", "Magical Lifesteal", "Magical power"].includes(Description),
      ) &&
      ItemDescription.Menuitems.some(({ Description }) =>
        [
          "Physical Power",
          "Physical power",
          "Attack Speed",
          "Physical Penetration",
          "Physical Lifesteal",
        ].includes(Description),
      ) &&
      (!isAttackSpeed ||
        ItemDescription.Menuitems.some(({ Description }) =>
          ["Attack Speed"].includes(Description),
        )) &&
      (!isPhysicalPower ||
        ItemDescription.Menuitems.some(({ Description }) =>
          ["Physical Power", "Physical power"].includes(Description),
        )) &&
      (!isPhysicalPenetration ||
        ItemDescription.Menuitems.some(({ Description }) =>
          ["Physical Penetration"].includes(Description),
        )) &&
      (!isPhysicalLifesteal ||
        ItemDescription.Menuitems.some(({ Description }) =>
          ["Physical Lifesteal"].includes(Description),
        )) &&
      Type !== "Active",
  );

  return (
    <>
      <li>
        <label htmlFor="Attack Speed">Attack Speed</label>
        <Checkbox
          entityKey={godName}
          attributeKey={"isAttackSpeed"}
          id="Attack Speed"
          name="Attack Speed"
          value="Attack Speed"
        />
      </li>
      <li>
        <label htmlFor="Physical Power">Physical Power</label>
        <Checkbox
          entityKey={godName}
          attributeKey={"isPhysicalPower"}
          id="Physical Power"
          name="Physical Power"
          value="Physical Power"
        />
      </li>
      <li>
        <label htmlFor="Physical Penetration">Physical Penetration</label>
        <Checkbox
          entityKey={godName}
          attributeKey={"isPhysicalPenetration"}
          id="Physical Penetration"
          name="Physical Penetration"
          value="Physical Penetration"
        />
      </li>
      <li>
        <label htmlFor="Physical Lifesteal">Physical Lifesteal</label>
        <Checkbox
          entityKey={godName}
          attributeKey={"isPhysicalLifesteal"}
          id="Physical Lifesteal"
          name="Physical Lifesteal"
          value="Physical Lifesteal"
        />
      </li>
      <br />
      {finalItems.map(({ DeviceName, itemIcon_URL }) => (
        <img
          src={itemIcon_URL}
          width={64}
          height={64}
          key={DeviceName}
          alt={DeviceName}
          title={DeviceName}
        />
      ))}
    </>
  );
};

export const ItemBuild = connector(ItemBuildFC);
