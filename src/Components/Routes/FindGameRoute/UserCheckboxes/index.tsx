import React, { FC } from "react";
import styled from "styled-components";

import { useSelectAuthUidAndFriendsIdsSorted } from "@Redux";

import { IncludeGamePassCheckbox } from "./IncludeGamePassCheckbox";
import { UserCheckboxEntity } from "./UserCheckboxEntity";

const StyledCheckbox = styled.div`
  margin-bottom: 16px;
`;

const UserCheckboxesFC: FC<{}> = () => {
  const userIds = useSelectAuthUidAndFriendsIdsSorted();

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
