import { Checkbox } from "@Common";
import { State, selectAllItems, selectSharedFilter } from "@Redux";
import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { SmiteItemImage } from "../SmiteItemImage";

interface Props {
  entityKey: string;
  onClickItemImage?: (itemId: number) => void;
  // godName: string;
}

const mapState = (state: State, { entityKey }: Props) => ({
  items: selectAllItems(state),
  isAttackSpeed: selectSharedFilter(state, entityKey, "isAttackSpeed"),
  isPhysicalPower: selectSharedFilter(state, entityKey, "isPhysicalPower"),
  isPhysicalPenetration: selectSharedFilter(state, entityKey, "isPhysicalPenetration"),
  isPhysicalLifesteal: selectSharedFilter(state, entityKey, "isPhysicalLifesteal"),
});

const connector = connect(mapState);

interface PropsForReals extends Props, ConnectedProps<typeof connector> {}

const ItemSearchFC: FC<PropsForReals> = ({
  entityKey,
  items,
  isAttackSpeed,
  isPhysicalPower,
  isPhysicalPenetration,
  isPhysicalLifesteal,
  onClickItemImage,
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
        {/* TODO: fix htmlFor to be unique */}
        <label htmlFor="Attack Speed">Attack Speed</label>
        <Checkbox
          entityKey={entityKey}
          attributeKey={"isAttackSpeed"}
          id="Attack Speed"
          name="Attack Speed"
          value="Attack Speed"
        />
      </li>
      <li>
        <label htmlFor="Physical Power">Physical Power</label>
        <Checkbox
          entityKey={entityKey}
          attributeKey={"isPhysicalPower"}
          id="Physical Power"
          name="Physical Power"
          value="Physical Power"
        />
      </li>
      <li>
        <label htmlFor="Physical Penetration">Physical Penetration</label>
        <Checkbox
          entityKey={entityKey}
          attributeKey={"isPhysicalPenetration"}
          id="Physical Penetration"
          name="Physical Penetration"
          value="Physical Penetration"
        />
      </li>
      <li>
        <label htmlFor="Physical Lifesteal">Physical Lifesteal</label>
        <Checkbox
          entityKey={entityKey}
          attributeKey={"isPhysicalLifesteal"}
          id="Physical Lifesteal"
          name="Physical Lifesteal"
          value="Physical Lifesteal"
        />
      </li>
      <br />
      {finalItems.map(({ ItemId, DeviceName }) => (
        <SmiteItemImage
          itemId={ItemId}
          width={64}
          height={64}
          key={DeviceName}
          onClick={() => onClickItemImage(ItemId)}
        />
      ))}
    </>
  );
};

export const ItemSearch = connector(ItemSearchFC);
