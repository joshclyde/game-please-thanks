import React, { FC, useCallback } from "react";

import { useFormInput } from "@Redux";

interface Props {
  id: string;
  name: string;
  formId: string;
}

const SelectMonthFC: FC<Props> = ({ id, name, formId }) => {
  const [value, setValue] = useFormInput(formId, id);
  const onChangeMonth = useCallback(
    (event: React.FormEvent<HTMLSelectElement>) => {
      const newValue = value ? new Date((value as Date).getTime()) : new Date();
      newValue.setMonth(parseInt(event.currentTarget.value));
      setValue(newValue);
    },
    [setValue, value],
  );

  const monthValue = value ? (value as Date).getMonth() : undefined;
  return (
    <select
      name={`${name}-month`}
      id={`${id}-month`}
      value={monthValue}
      onChange={onChangeMonth}
    >
      <option value="0">January</option>
      <option value="1">February</option>
      <option value="2">March</option>
      <option value="3">April</option>
      <option value="4">May</option>
      <option value="5">June</option>
      <option value="6">July</option>
      <option value="7">August</option>
      <option value="8">September</option>
      <option value="9">October</option>
      <option value="10">November</option>
      <option value="11">December</option>
    </select>
  );
};

export const SelectMonth = SelectMonthFC;
