import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { DelayedCheckbox } from "@DesignEnhanced";
import { useOptimisticUpdateAuthUserFriends, useSelectAuthIsFriend } from "@Redux";

const Checkbox = styled(DelayedCheckbox)`
  margin-top: 16px;
`;

export const IsFriendCheckbox: FC<{ userId: string; className?: string }> = ({
  userId,
  ...rest
}) => {
  const isFriend = useSelectAuthIsFriend(userId);
  const updateAuthUserFriends = useOptimisticUpdateAuthUserFriends();

  const onChangeDelayed = useCallback(
    (checked: boolean) => {
      updateAuthUserFriends({ [userId]: { isFriend: checked } });
    },
    [updateAuthUserFriends, userId],
  );

  return (
    <Checkbox
      id={`IS_FRIEND_CHECKBOX_${userId}`}
      name={`IS_FRIEND_CHECKBOX_${userId}`}
      onChangeDelayed={onChangeDelayed}
      label="Is a friend"
      initialState={Boolean(isFriend)}
      {...rest}
    />
  );
};
