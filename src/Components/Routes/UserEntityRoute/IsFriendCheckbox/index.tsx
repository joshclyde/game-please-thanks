import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { DelayedCheckbox } from "@DesignEnhanced";
import { useCurrentUserId, useIsFriend, useUpdateCurrentUsersFriend } from "@State";

const Checkbox = styled(DelayedCheckbox)`
  margin-top: 16px;
`;

export const IsFriendCheckbox: FC<{ userId: string; className?: string }> = ({
  userId,
  className,
}) => {
  const isFriend = useIsFriend(userId);
  const updateFriend = useUpdateCurrentUsersFriend();
  const currentUserId = useCurrentUserId();

  const onChangeDelayed = useCallback(
    (checked: boolean) => {
      updateFriend(userId, { isFriend: checked });
    },
    [updateFriend, userId],
  );

  if (currentUserId === userId) {
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
