import React, { FC } from "react";
import styled from "styled-components";

import { FormCheckbox } from "@DesignRedux";
import { useSelectUserName, useSelectUid } from "@Redux";

const Checkbox = styled(FormCheckbox)`
  margin-bottom: 16px;
`;

const UserCheckboxEntityFC: FC<{ userId: string }> = ({ userId }) => {
  const uid = useSelectUid();
  const name = useSelectUserName(userId);
  const label = uid === userId ? `${name} (you)` : name;

  return <Checkbox formId="FIND_GAME_ROUTE" id={userId} name={userId} label={label} />;
};

export const UserCheckboxEntity = UserCheckboxEntityFC;
