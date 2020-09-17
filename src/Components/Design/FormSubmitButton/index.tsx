import React, { FC } from "react";

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type"
  > {}

const FormSubmitButtonFC: FC<Props> = ({ value = `Submit`, ...rest }) => {
  return <input type="submit" value={value} {...rest} />;
};

export const FormSubmitButton = FormSubmitButtonFC;
