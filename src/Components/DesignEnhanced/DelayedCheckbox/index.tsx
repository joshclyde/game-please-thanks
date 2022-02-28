import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";

import { FormCheckbox as DesignFormCheckbox } from "@Design";
import { useEffectAnyDependencies, useTimer, useEffectExceptFirstMount } from "@Hooks";

const Checkbox = styled(DesignFormCheckbox)`
  margin-top: 16px;
`;

interface DelayedCheckboxProps {
  className?: string;
  id: string;
  name: string;
  label: string;
  initialState: boolean;
  onChangeDelayed: (isChecked: boolean) => void;
}

/*
  TODO: This component is inside the DesignRedux folder, but the state doesn't live in redux.
  Either have the state live in redux or move the component to a different folder.
*/
export const DelayedCheckbox: FC<DelayedCheckboxProps> = ({
  id,
  name,
  label,
  initialState,
  onChangeDelayed,
  ...rest
}) => {
  /*
    Keeps track of the `checked` state. `checked` will update without delay.
  */
  const [checked, setChecked] = useState(initialState);
  const onChange = useCallback(() => {
    setChecked((prevState) => !prevState);
  }, []);

  /*
    When `checked` changes a timer will be started.

    If `checked` changes again before the timer finishes,
    the timer will be canceled and a new timer will start (because
    that is how `useTimer` works).
  */
  const [completed, startTimer] = useTimer(1000);
  useEffectExceptFirstMount(() => {
    startTimer();
  }, [checked]);

  /*
    When the timer has completed the `completed` variable will increment
    by 1 which is what we will use to decide when to update.
  */
  useEffectExceptFirstMount(() => {
    if (completed > 0) {
      onChangeDelayed(checked);
    }
  }, [completed]);

  return (
    <Checkbox
      id={id}
      name={name}
      onChange={onChange}
      checked={Boolean(checked)}
      label={label}
      {...rest}
    />
  );
};
