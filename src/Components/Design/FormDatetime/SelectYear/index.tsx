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

const SelectYearFC: FC<Props> = ({
  id,
  name,
  value,
  setFormInputValue,
  formId,
  ...rest
}) => {
  const onChange = useCallback(
    (event: React.FormEvent<HTMLSelectElement>) => {
      const newValue = value ? new Date((value as Date).getTime()) : new Date();
      newValue.setFullYear(parseInt(event.currentTarget.value));
      setFormInputValue(formId, id, newValue);
    },
    [formId, id, setFormInputValue, value],
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

export const SelectYear = connector(SelectYearFC);
