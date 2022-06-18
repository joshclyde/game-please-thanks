import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { DelayedCheckbox } from "@DesignEnhanced";
import {
  useOptimisticUpdateAuthUserFriends,
  useSelectAuthIsFriend,
  useSelectUid,
} from "@Redux";

const Checkbox = styled(DelayedCheckbox)`
  margin-top: 16px;
`;

export const IsFriendCheckbox: FC<{ userId: string; className?: string }> = ({
  userId,
  className,
}) => {
  const isFriend = useSelectAuthIsFriend(userId);
  const updateAuthUserFriends = useOptimisticUpdateAuthUserFriends();
  const uid = useSelectUid();

  const onChangeDelayed = useCallback(
    (checked: boolean) => {
      updateAuthUserFriends({ [userId]: { isFriend: checked } });
    },
    [updateAuthUserFriends, userId],
  );

  if (uid === userId) {
    /*
      Don't want to display the IsFriendCheckbox for the user's self.
    */
    return null;
  }

  return (
    <Checkbox
      id={`IS_FRIEND_CHECKBOX_${userId}`}
      name={`IS_FRIEND_CHECKBOX_${userId}`}
      onChangeDelayed={onChangeDelayed}
      label="Is a friend"
      initialState={Boolean(isFriend)}
      className={className}
    />
  );
};
