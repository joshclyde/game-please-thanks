import React, { FC, useCallback } from "react";

import { FormSelect as Select } from "@Design";
import { useFormInput } from "@Redux";

interface Props extends Omit<React.ComponentProps<typeof Select>, "value"> {
  id: string;
  name: string;
  formId: string;
  children: React.ReactNode;
}

const FormSelectFC: FC<Props> = ({ id, name, formId, ...rest }) => {
  const [value, setValue] = useFormInput(formId, id);

  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    },
    [setValue],
  );

  return (
    <Select
      id={id}
      name={name}
      // TODO: don't cast this 😡
      value={(value as string | number) || ``}
      onChange={onChange}
      {...rest}
    />
  );
};

export const FormSelect = FormSelectFC;
