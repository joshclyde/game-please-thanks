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

const FormDatetimeFC: FC<Props> = ({ id, name, ...rest }) => {
  return <input type="datetime-local" id={id} name={name} {...rest} />;
};

export const FormDatetime = FormDatetimeFC;
