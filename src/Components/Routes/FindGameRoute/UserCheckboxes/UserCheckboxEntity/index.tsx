import React, { FC } from "react";

import { FormCheckbox } from "@DesignRedux";
import { useSelectUserNameMaybeYou } from "@Redux";

const UserCheckboxEntityFC: FC<{ userId: string; className?: string }> = ({
  userId,
  className,
}) => {
  const label = useSelectUserNameMaybeYou(userId);

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
