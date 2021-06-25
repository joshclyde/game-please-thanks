import React, { FC } from "react";

import { useSelectAuthUidAndFriendsIdsSorted } from "@Redux";

import { UserCheckboxEntity } from "./UserCheckboxEntity";

const UserCheckboxesFC: FC<{}> = () => {
  const userIds = useSelectAuthUidAndFriendsIdsSorted();

  return userIds ? (
    <>
      {userIds.map((userId) => (
        <UserCheckboxEntity key={userId} userId={userId} />
      ))}
    </>
  ) : null;
};

export const UserCheckboxes = UserCheckboxesFC;
