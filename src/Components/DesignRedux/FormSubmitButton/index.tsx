import React, { FC } from "react";

import { Button } from "@Design";

interface FormSubmitButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "type"> {
  onSubmit: ({}: any) => void;
}

const FormSubmitButtonFC: FC<FormSubmitButtonProps> = ({
  value = `Submit`,
  onSubmit,
  ...rest
}) => {
  return <Button type="submit" value={value} onClick={onSubmit} {...rest} />;
};

export const FormSubmitButton = FormSubmitButtonFC;
