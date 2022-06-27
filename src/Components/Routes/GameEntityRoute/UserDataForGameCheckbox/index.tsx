import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { FormCheckbox as DesignCheckbox } from "@Design";
import { useUpdateUserDataForGame, useUserDataForGame } from "@State";
import { KeysForUserDataForGame } from "@Types";

const Checkbox = styled(DesignCheckbox)`
  margin-top: 16px;
`;

const labels = {
  isOwned: `Owned`,
  isInstalled: `Installed`,
};

/*
  This name is a bit long, but I think it represents what this checkbox
  does fairly well.
*/
export const UserDataForGameCheckbox: FC<{
  gameId: string;
  attribute: KeysForUserDataForGame;
  className?: string;
}> = ({ gameId, attribute, ...rest }) => {
  const gameData = useUserDataForGame(gameId);
  const updateUserDataForGame = useUpdateUserDataForGame();

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      updateUserDataForGame(gameId, attribute, event.target.checked);
    },
    [updateUserDataForGame, gameId, attribute],
  );

  return (
    <Checkbox
      id={`CHECKBOX_${gameId}_${attribute}`.toUpperCase()}
      name={`CHECKBOX_${gameId}_${attribute}`.toUpperCase()}
      label={labels[attribute]}
      onChange={onChange}
      checked={Boolean(gameData?.[attribute] || false)} // TODO: this is a bit odd maybe?
      {...rest}
    />
  );
};
