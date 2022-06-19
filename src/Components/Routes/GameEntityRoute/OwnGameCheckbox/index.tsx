import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { DelayedCheckbox } from "@DesignEnhanced";
import { useIsGameOwned, useUpdateGameIsOwned } from "@State";

const Checkbox = styled(DelayedCheckbox)`
  margin-top: 16px;
`;

export const OwnGameCheckbox: FC<{ gameId: string; className?: string }> = ({
  gameId,
  ...rest
}) => {
  const isGameOwned = useIsGameOwned(gameId);
  const updateGameIsOwned = useUpdateGameIsOwned();

  const onChangeDelayed = useCallback(
    (checked: boolean) => {
      updateGameIsOwned(gameId, checked);
    },
    [updateGameIsOwned, gameId],
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
