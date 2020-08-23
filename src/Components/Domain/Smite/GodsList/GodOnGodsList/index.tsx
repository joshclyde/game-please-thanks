import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SmiteGodIconImage } from "@SmiteCommon";

interface Props {
  godName: string;
}

interface PropsForReals extends Props {}

const GodOnGodsListFC: FC<PropsForReals> = ({ godName }) => {
  return (
    <Link to={`/smite/gods/${godName}`}>
      <SmiteGodIconImage godName={godName} width="64" height="64" />
    </Link>
  );
};

export const GodOnGodsList = GodOnGodsListFC;
