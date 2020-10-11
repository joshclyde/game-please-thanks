import React, { FC, useCallback } from "react";
import { connect, ConnectedProps } from "react-redux";

import { makeActionSetFormInputValue, State, selectFormInputValue } from "@Redux";

// TODO: make an hoc for [value, setValue] for form stuff?
const mapState = (state: State, { formId, id }: OwnProps) => ({
  value: selectFormInputValue(state, formId, id),
});

const mapDispatch = { setFormInputValue: makeActionSetFormInputValue };

const connector = connect(mapState, mapDispatch);

interface OwnProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type" | "value"
  > {
  id: string;
  name: string;
  formId: string;
}
interface Props extends OwnProps, ConnectedProps<typeof connector> {}

const FormCheckboxFC: FC<Props> = ({
  id,
  name,
  value,
  setFormInputValue,
  formId,
  ...rest
}) => {
  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setFormInputValue(formId, id, event.currentTarget.checked);
    },
    [formId, id, setFormInputValue],
  );

  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={Boolean(value)}
      onChange={onChange}
      {...rest}
    />
  );
};

export const FormCheckbox = connector(FormCheckboxFC);
