import React, { FC, useCallback } from "react";

import { useFormInput } from "@Redux";

interface Props {
  id: string;
  name: string;
  formId: string;
}

const SelectMinuteFC: FC<Props> = ({ id, name, formId }) => {
  const [value, setValue] = useFormInput(formId, id);
  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const newMinute = parseInt(event.currentTarget.value);
      if (newMinute >= 0 && newMinute <= 59) {
        const newValue = value ? new Date((value as Date).getTime()) : new Date();
        newValue.setMinutes(parseInt(event.currentTarget.value));
        setValue(newValue);
      }
    },
    [setValue, value],
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
    />
  );
};

export const SelectMinute = SelectMinuteFC;
