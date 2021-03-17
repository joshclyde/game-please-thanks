import React, { FC, useCallback } from "react";

import { useFormInput } from "@Redux";

interface Props {
  id: string;
  name: string;
  formId: string;
}

const SelectDayFC: FC<Props> = ({ id, name, formId }) => {
  const [value, setValue] = useFormInput(formId, id);
  const onChange = useCallback(
    (event: React.FormEvent<HTMLSelectElement>) => {
      const newValue = value ? new Date((value as Date).getTime()) : new Date();
      newValue.setDate(parseInt(event.currentTarget.value));
      setValue(newValue);
    },
    [setValue, value],
  );

  const dayValue = value ? (value as Date).getDate() : undefined;
  return (
    <select name={`${name}-day`} id={`${id}-day`} value={dayValue} onChange={onChange}>
      <option value="1">1st</option>
      <option value="2">2nd</option>
      <option value="3">3rd</option>
      <option value="4">4th</option>
      <option value="5">5th</option>
      <option value="6">6th</option>
      <option value="7">7th</option>
      <option value="8">8th</option>
      <option value="9">9th</option>
      <option value="10">10th</option>
      <option value="11">11th</option>
      <option value="12">12th</option>
      <option value="13">13th</option>
      <option value="14">14th</option>
      <option value="15">15th</option>
      <option value="16">16th</option>
      <option value="17">17th</option>
      <option value="18">18th</option>
      <option value="19">19th</option>
      <option value="20">20th</option>
      <option value="21">21st</option>
      <option value="22">22nd</option>
      <option value="23">23rd</option>
      <option value="24">24th</option>
      <option value="25">25th</option>
      <option value="26">26th</option>
      <option value="27">27th</option>
      <option value="28">28th</option>
      <option value="29">29th</option>
      <option value="30">30th</option>
      <option value="31">31st</option>
    </select>
  );
};

export const SelectDay = SelectDayFC;
