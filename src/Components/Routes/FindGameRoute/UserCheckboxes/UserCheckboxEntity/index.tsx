import React, { FC } from "react";
import styled from "styled-components";

import { FormCheckbox } from "@DesignRedux";
import { useSelectUserNameMaybeYou, useSelectUid } from "@Redux";

const Checkbox = styled(FormCheckbox)`
  margin-bottom: 16px;
`;

const UserCheckboxEntityFC: FC<{ userId: string }> = ({ userId }) => {
  const uid = useSelectUid();
  const label = useSelectUserNameMaybeYou(userId);

  return <Checkbox formId="FIND_GAME_ROUTE" id={userId} name={userId} label={label} />;
};

export const UserCheckboxEntity = UserCheckboxEntityFC;
