import React, { FC, useEffect, useCallback } from "react";

import { useSelectDoesFormExist, useCreateForm } from "@Redux";

interface OwnProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  formId: string;
}
interface Props extends OwnProps {}

const FormFC: FC<Props> = ({ onSubmit, formId, ...restProps }) => {
  const doesFormExist = useSelectDoesFormExist(formId);
  const createForm = useCreateForm();
  useEffect(() => {
    if (!doesFormExist) {
      createForm(formId);
    }
  }, [doesFormExist, createForm, formId]);

  // will I ever want the default? probably not
  const onSubmitPreventDefault = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(event);
    },
    [onSubmit],
  );

  return <form {...restProps} onSubmit={onSubmitPreventDefault} />;
};

export const Form = FormFC;
