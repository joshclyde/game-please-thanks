import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { makeActionCreateForm, State, selectDoesFormExist } from "@Redux";

const mapState = (state: State, { formId }: OwnProps) => ({
  doesFormExist: selectDoesFormExist(state, formId),
});

const mapDispatch = { createForm: makeActionCreateForm };

const connector = connect(mapState, mapDispatch);

interface OwnProps extends React.FormHTMLAttributes<HTMLFormElement> {
  formId: string;
}
interface Props extends OwnProps, ConnectedProps<typeof connector> {}

const FormFC: FC<Props> = ({ createForm, doesFormExist, ...rest }) => {
  const { formId } = rest;
  useEffect(() => {
    if (!doesFormExist) {
      createForm(formId);
    }
  }, [doesFormExist, createForm, formId]);

  return <form {...rest} />;
};

export const Form = connector(FormFC);
