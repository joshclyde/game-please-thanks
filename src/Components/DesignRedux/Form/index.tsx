import React, { FC, useEffect } from "react";

import { useSelectDoesFormExist, useCreateForm } from "@Redux";

interface OwnProps extends React.FormHTMLAttributes<HTMLFormElement> {
  formId: string;
}
interface Props extends OwnProps {}

const FormFC: FC<Props> = (props) => {
  const { formId } = props;
  const doesFormExist = useSelectDoesFormExist(formId);
  const createForm = useCreateForm(formId);
  useEffect(() => {
    if (!doesFormExist) {
      createForm();
    }
  }, [doesFormExist, createForm]);

  return <form {...props} />;
};

export const Form = FormFC;
