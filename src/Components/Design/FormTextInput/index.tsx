import React, { FC, useCallback } from "react";

import { useFormInput } from "@Redux";

interface Props
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

const FormTextInputFC: FC<Props> = ({ id, name, formId, ...rest }) => {
  const [value, setValue] = useFormInput(formId, id);
  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    },
    [setValue],
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

export const FormTextInput = FormTextInputFC;
