import React, { useCallback } from "react";

import { LinkFancyButton } from "@Common";
import { signInUserThroughGoogle } from "@Firebase";

export const LoginLink = () => {
  const onClick = useCallback(() => signInUserThroughGoogle(), []);
  return <LinkFancyButton onClick={onClick}>Login</LinkFancyButton>;
};
