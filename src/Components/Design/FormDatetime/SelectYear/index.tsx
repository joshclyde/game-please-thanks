import React, { FC, useCallback } from "react";

import { useFormInput } from "@Redux";

interface Props {
  id: string;
  name: string;
  formId: string;
}

const SelectYearFC: FC<Props> = ({ id, name, formId }) => {
  const [value, setValue] = useFormInput(formId, id);
  const onChange = useCallback(
    (event: React.FormEvent<HTMLSelectElement>) => {
      const newValue = value ? new Date((value as Date).getTime()) : new Date();
      newValue.setFullYear(parseInt(event.currentTarget.value));
      setValue(newValue);
    },
    [setValue, value],
  );

  const yearValue = value ? (value as Date).getFullYear() : undefined;
  return (
    <select name={`${name}-year`} id={`${id}-year`} value={yearValue} onChange={onChange}>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
    </select>
  );
};

export const SelectYear = SelectYearFC;
