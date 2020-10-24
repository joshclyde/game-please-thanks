// TODO: Do this differently. Maybe a hoc?
import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { makeThunkStartListenerForAuth } from "@Redux";

const mapDispatch = {
  startListenerForAuth: makeThunkStartListenerForAuth,
};

const connector = connect(null, mapDispatch);

type AuthListenerProps = ConnectedProps<typeof connector> & {};

const AuthListenerFC: FC<AuthListenerProps> = ({ startListenerForAuth }) => {
  useEffect(() => {
    startListenerForAuth();
  }, [startListenerForAuth]);
  return null;
};

export const AuthListener = connector(AuthListenerFC);
