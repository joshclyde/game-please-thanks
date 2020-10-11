import React, { FC, useCallback } from "react";
import { connect, ConnectedProps } from "react-redux";

import { makeActionSetFormInputValue, State, selectFormInputValue } from "@Redux";

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

const FormTextInputFC: FC<Props> = ({
  id,
  name,
  value,
  setFormInputValue,
  formId,
  ...rest
}) => {
  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setFormInputValue(formId, id, event.currentTarget.value);
    },
    [formId, id, setFormInputValue],
  );

  return (
    <input
      type="text"
      id={id}
      name={name}
      // TODO: don't cast this
      value={value as string | number}
      onChange={onChange}
      {...rest}
    />
  );
};

export const FormTextInput = connector(FormTextInputFC);
