import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import { State, selectGodAbilityImageUrl } from "@Redux";

interface Props {
  godName: string;
  abilityIndex: number;
}

const mapState = (state: State, { godName, abilityIndex }: Props) => ({
  abilityImageUrl: selectGodAbilityImageUrl(state, godName, abilityIndex),
});

const connector = connect(mapState);

type Image = JSX.IntrinsicElements["img"];

interface PropsForReals extends Props, ConnectedProps<typeof connector>, Image {}

const GodAbilityImageFC: FC<PropsForReals> = ({ abilityImageUrl, ...restProps }) => {
  return <img src={abilityImageUrl} {...restProps} />;
};

export const GodAbilityImage = connector(GodAbilityImageFC);
