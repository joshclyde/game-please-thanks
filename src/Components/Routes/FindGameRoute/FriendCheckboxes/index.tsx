import React, { FC } from "react";

import { useSelectFriendsIds } from "@Redux";

import { FriendCheckboxEntity } from "./FriendCheckboxEntity";

const FriendCheckboxesFC: FC<{}> = () => {
  const friendIds = useSelectFriendsIds();

  return (
    <>
      {friendIds.map((friendId) => (
        <FriendCheckboxEntity key={friendId} friendId={friendId} />
      ))}
    </>
  );
};

export const FriendCheckboxes = FriendCheckboxesFC;
