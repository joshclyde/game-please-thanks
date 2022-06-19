import React, { FC } from "react";

import { FormCheckbox } from "@DesignRedux";
import { useUsersNameMaybeYou } from "@State";

const UserCheckboxEntityFC: FC<{ userId: string; className?: string }> = ({
  userId,
  className,
}) => {
  const label = useUsersNameMaybeYou(userId);

  return (
    <FormCheckbox
      className={className}
      formId="FIND_GAME_ROUTE"
      id={userId}
      name={userId}
      label={label}
    />
  );
};

export const UserCheckboxEntity = UserCheckboxEntityFC;
