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

const SelectHourFC: FC<Props> = ({
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
      newValue.setHours(parseInt(event.currentTarget.value));
      setFormInputValue(formId, id, newValue);
    },
    [formId, id, setFormInputValue, value],
  );

  const hourValue = value ? (value as Date).getHours() : undefined;
  return (
    <select name={`${name}-hour`} id={`${id}-hour`} value={hourValue} onChange={onChange}>
      <option value="0">12 AM</option>
      <option value="1">1 AM</option>
      <option value="2">2 AM</option>
      <option value="3">3 AM</option>
      <option value="4">4 AM</option>
      <option value="5">5 AM</option>
      <option value="6">6 AM</option>
      <option value="7">7 AM</option>
      <option value="8">8 AM</option>
      <option value="9">9 AM</option>
      <option value="10">10 AM</option>
      <option value="11">11 AM</option>
      <option value="12">12 PM</option>
      <option value="13">1 PM</option>
      <option value="14">2 PM</option>
      <option value="15">3 PM</option>
      <option value="16">4 PM</option>
      <option value="17">5 PM</option>
      <option value="18">6 PM</option>
      <option value="19">7 PM</option>
      <option value="20">8 PM</option>
      <option value="21">9 PM</option>
      <option value="22">10 PM</option>
      <option value="23">11 PM</option>
    </select>
  );
};

export const SelectHour = connector(SelectHourFC);
