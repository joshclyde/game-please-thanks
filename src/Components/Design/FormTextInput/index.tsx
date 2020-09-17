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

const FormTextInputFC: FC<Props> = ({ id, name, ...rest }) => {
  return <input type="text" id={id} name={name} {...rest} />;
};

export const FormTextInput = FormTextInputFC;
