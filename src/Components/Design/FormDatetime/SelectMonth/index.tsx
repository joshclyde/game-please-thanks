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

const SelectMonthFC: FC<Props> = ({
  id,
  name,
  value,
  setFormInputValue,
  formId,
  ...rest
}) => {
  const onChangeMonth = useCallback(
    (event: React.FormEvent<HTMLSelectElement>) => {
      const newValue = value ? new Date((value as Date).getTime()) : new Date();
      newValue.setMonth(parseInt(event.currentTarget.value));
      setFormInputValue(formId, id, newValue);
    },
    [formId, id, setFormInputValue, value],
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

export const SelectMonth = connector(SelectMonthFC);
