import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";

import { FormCheckbox as DesignFormCheckbox } from "@Design";
import { useTimeout } from "@Hooks";
import { useSelectAuthIsGameOwned, useOptimisticUpdateAuthUserOwnsGame } from "@Redux";

const Checkbox = styled(DesignFormCheckbox)`
  margin-top: 16px;
`;

export const OwnGameCheckbox: FC<{ gameId: string; className?: string }> = ({
  gameId,
  ...rest
}) => {
  const isGameOwned = useSelectAuthIsGameOwned(gameId);
  const optimisticUpdateUserAuthGameIsOwned = useOptimisticUpdateAuthUserOwnsGame();

  const [checked, setChecked] = useState(isGameOwned);

  const onTimeoutCallback = useCallback(
    (gameIdParam: string, isGameOwnedProp: boolean) => {
      optimisticUpdateUserAuthGameIsOwned(gameIdParam, isGameOwnedProp);
    },
    [optimisticUpdateUserAuthGameIsOwned],
  );

  const delayedUpdate = useTimeout(onTimeoutCallback, 1000);

  const onChange2 = useCallback(() => {
    setChecked((prevState) => !prevState);
    if (!checked != isGameOwned) {
      delayedUpdate(gameId, !checked);
    }
  }, [checked, isGameOwned, delayedUpdate, gameId]);

  return (
    <Checkbox
      id={`OWN_GAME_CHECKBOX_${gameId}`}
      name={`OWN_GAME_CHECKBOX_${gameId}`}
      onChange={onChange2}
      checked={Boolean(checked)}
      label="I own this game"
      {...rest}
    />
  );
};
