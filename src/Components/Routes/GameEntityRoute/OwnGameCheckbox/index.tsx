import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { DelayedCheckbox } from "@DesignRedux";
import { useOptimisticUpdateAuthUserOwnsGame, useSelectAuthIsGameOwned } from "@Redux";

const Checkbox = styled(DelayedCheckbox)`
  margin-top: 16px;
`;

export const OwnGameCheckbox: FC<{ gameId: string; className?: string }> = ({
  gameId,
  ...rest
}) => {
  const isGameOwned = useSelectAuthIsGameOwned(gameId);
  const optimisticUpdateUserAuthGameIsOwned = useOptimisticUpdateAuthUserOwnsGame();

  const onChangeDelayed = useCallback(
    (checked: boolean) => {
      optimisticUpdateUserAuthGameIsOwned(gameId, checked);
    },
    [optimisticUpdateUserAuthGameIsOwned, gameId],
  );

  return (
    <Checkbox
      id={`OWN_GAME_CHECKBOX_${gameId}`}
      name={`OWN_GAME_CHECKBOX_${gameId}`}
      label="I own this game"
      onChangeDelayed={onChangeDelayed}
      initialState={Boolean(isGameOwned)}
      {...rest}
    />
  );
};
