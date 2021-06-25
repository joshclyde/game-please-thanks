import React, { FC } from "react";

import { useSelectAuthFriendsIds } from "@Redux";

import { FriendCheckboxEntity } from "./FriendCheckboxEntity";

const FriendCheckboxesFC: FC<{}> = () => {
  const friendIds = useSelectAuthFriendsIds();

  return friendIds ? (
    <>
      {friendIds.map((friendId) => (
        <FriendCheckboxEntity key={friendId} friendId={friendId} />
      ))}
    </>
  ) : null;
};

export const FriendCheckboxes = FriendCheckboxesFC;
