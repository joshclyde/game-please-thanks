import React, { FC } from "react";

import { Button } from "@Design";

interface FormSubmitButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "type"> {}

const FormSubmitButtonFC: FC<FormSubmitButtonProps> = ({ value = `Submit`, ...rest }) => {
  return <Button type="submit" value={value} {...rest} />;
};

export const FormSubmitButton = FormSubmitButtonFC;
