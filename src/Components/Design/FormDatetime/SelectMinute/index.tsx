import React, { FC, useCallback } from "react";
import { connect, ConnectedProps } from "react-redux";

import { makeActionSetFormInputValue, State, selectFormInputValue } from "@Redux";

const mapState = (state: State, { formId, id }: OwnProps) => ({
  value: selectFormInputValue(state, formId, id),
});

const mapDispatch = { setFormInputValue: makeActionSetFormInputValue };

const connector = connect(mapState, mapDispatch);

interface OwnProps {
  id: string;
  name: string;
  formId: string;
}
interface Props extends OwnProps, ConnectedProps<typeof connector> {}

const SelectMinuteFC: FC<Props> = ({
  id,
  name,
  value,
  setFormInputValue,
  formId,
  ...rest
}) => {
  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const newMinute = parseInt(event.currentTarget.value);
      if (newMinute >= 0 && newMinute <= 59) {
        const newValue = value ? new Date((value as Date).getTime()) : new Date();
        newValue.setMinutes(parseInt(event.currentTarget.value));
        setFormInputValue(formId, id, newValue);
      }
    },
    [formId, id, setFormInputValue, value],
  );

  const minuteValue = value ? (value as Date).getMinutes() : 0;
  return (
    <input
      type="number"
      name={`${name}-minute`}
      id={`${id}-minute`}
      min="0"
      max="59"
      value={minuteValue}
      onChange={onChange}
    ></input>
  );
};

export const SelectMinute = connector(SelectMinuteFC);
