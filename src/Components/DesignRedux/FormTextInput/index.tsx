import React, { FC, useCallback } from "react";

import { TextInput } from "@Design";
import { useSelectFormInputValue, useSetFormInputValue } from "@Redux";

interface Props extends Omit<React.ComponentProps<typeof TextInput>, "type" | "value"> {
  id: string;
  name: string;
  formId: string;
}

const FormTextInputFC: FC<Props> = ({ id, name, formId, ...rest }) => {
  const value = useSelectFormInputValue(formId, id);
  const setFormInputValue = useSetFormInputValue(formId, id);

  const onChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setFormInputValue(event.currentTarget.value);
    },
    [setFormInputValue],
  );

  return (
    <TextInput
      id={id}
      name={name}
      // // TODO: don't cast this 😡
      value={(value as string | number) || ``}
      onChange={onChange}
      {...rest}
    />
  );
};

export const FormTextInput = FormTextInputFC;
