import React, { FC, useCallback } from "react";

import { FormTextInput as Input } from "@Design";
import { useFormInput } from "@Redux";

interface Props extends Omit<React.ComponentProps<typeof Input>, "value"> {
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
    <Input
      id={id}
      name={name}
      // TODO: don't cast this 😡
      value={(value as string | number) || ``}
      onChange={onChange}
      {...rest}
    />
  );
};

export const FormTextInput = FormTextInputFC;
