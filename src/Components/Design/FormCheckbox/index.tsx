import React, { FC } from "react";

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type"
  > {
  id: string;
  name: string;
}

const FormCheckboxFC: FC<Props> = ({ id, name, ...rest }) => {
  return <input type="checkbox" id={id} name={name} {...rest} />;
};

export const FormCheckbox = FormCheckboxFC;
