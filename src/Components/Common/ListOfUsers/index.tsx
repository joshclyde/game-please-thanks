import React, { FC } from "react";
import styled from "styled-components";

import { Entity } from "./Entity";

const Div = styled.div`
  width: 100%;
`;

interface Props {
  userIds: Array<string>;
}

const ListOfUsersFC: FC<Props> = ({ userIds }) => {
  return (
    <Div>
      {userIds.map((userId) => (
        <Entity userId={userId} key={userId} />
      ))}
    </Div>
  );
};

export const ListOfUsers = ListOfUsersFC;
