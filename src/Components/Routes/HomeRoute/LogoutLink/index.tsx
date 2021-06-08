import React, { useCallback } from "react";

import { LinkFancyButton } from "@Common";
import { signOutUser } from "@Firebase";

export const LogoutLink = () => {
  const onClick = useCallback(() => signOutUser(), []);
  return <LinkFancyButton onClick={onClick}>Logout</LinkFancyButton>;
};
