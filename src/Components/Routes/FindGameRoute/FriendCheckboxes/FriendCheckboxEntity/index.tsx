import React, { FC } from "react";
import styled from "styled-components";

import { FormCheckbox } from "@DesignRedux";
import { useSelectUserName } from "@Redux";

const Checkbox = styled(FormCheckbox)`
  margin-bottom: 16px;
`;

const FriendCheckboxEntityFC: FC<{ friendId: string }> = ({ friendId }) => {
  const label = useSelectUserName(friendId);

  return (
    <Checkbox formId="FIND_GAME_ROUTE" id={friendId} name={friendId} label={label} />
  );
};

export const FriendCheckboxEntity = FriendCheckboxEntityFC;
