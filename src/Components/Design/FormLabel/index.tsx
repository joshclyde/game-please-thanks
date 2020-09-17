import React, { FC } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  htmlFor: string;
}

const FormLabelFC: FC<Props> = ({ htmlFor, children, ...rest }) => {
  return (
    <label htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};

export const FormLabel = FormLabelFC;
