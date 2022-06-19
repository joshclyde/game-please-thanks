import React, { FC } from "react";
import styled from "styled-components";

import { useCurrentUserIdAndFriendIdsSortedByName } from "@State";

import { IncludeGamePassCheckbox } from "./IncludeGamePassCheckbox";
import { UserCheckboxEntity } from "./UserCheckboxEntity";

const StyledCheckbox = styled.div`
  margin-bottom: 16px;
`;

const UserCheckboxesFC: FC<{}> = () => {
  const userIds = useCurrentUserIdAndFriendIdsSortedByName();

  return userIds ? (
    <>
      {userIds.map((userId) => (
        <StyledCheckbox as={UserCheckboxEntity} key={userId} userId={userId} />
      ))}
      <StyledCheckbox as={IncludeGamePassCheckbox} />
    </>
  ) : null;
};

export const UserCheckboxes = UserCheckboxesFC;
