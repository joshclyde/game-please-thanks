import React, { FC, useEffect, useCallback } from "react";

import { useSelectDoesFormExist, useCreateForm } from "@Redux";

interface OwnProps extends React.FormHTMLAttributes<HTMLFormElement> {
  formId: string;
}
interface Props extends OwnProps {}

const FormFC: FC<Props> = ({ onSubmit, ...props }) => {
  const { formId } = props;
  const doesFormExist = useSelectDoesFormExist(formId);
  const createForm = useCreateForm(formId);
  useEffect(() => {
    if (!doesFormExist) {
      createForm();
    }
  }, [doesFormExist, createForm]);

  // will I ever want the default? probably not
  const onSubmitPreventDefault = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(event);
    },
    [onSubmit],
  );

  return <form {...props} onSubmit={onSubmitPreventDefault} />;
};

export const Form = FormFC;
