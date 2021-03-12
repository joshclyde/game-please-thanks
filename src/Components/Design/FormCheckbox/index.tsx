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

const FormCheckboxFC: FC<Props> = ({ id, name, formId, ...rest }) => {
  const [value, setValue] = useFormInput(formId, id);
  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.checked);
    },
    [setValue],
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

export const FormCheckbox = FormCheckboxFC;
