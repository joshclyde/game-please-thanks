import React, { FC, useCallback } from "react";

import { FormCheckbox as DesignFormCheckbox } from "@Design";
import { useFormInput } from "@Redux";

interface Props
  extends Omit<React.ComponentProps<typeof DesignFormCheckbox>, "type" | "checked"> {
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
    <DesignFormCheckbox
      id={id}
      name={name}
      formId={formId}
      onChange={onChange}
      checked={Boolean(value)}
      {...rest}
    />
  );
};

export const FormCheckbox = FormCheckboxFC;
