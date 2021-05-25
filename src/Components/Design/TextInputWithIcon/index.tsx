import React, { FC } from "react";
import styled from "styled-components";

import { FormTextInput } from "../FormTextInput";
import { IconSearch } from "../Icons";

const Div = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding-right: 32px;
`;

const StyledIcon = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  // TODO: figure this out better?? this is very dependent on the Icon being the correct size
  // right: 8px;
  // top: 8px;
`;

interface Props {
  className?: string;
  Input: typeof FormTextInput;
  Icon: typeof IconSearch; // TODO change this
}

export const TextInputWithIcon: FC<Props> = ({ className, Input, Icon }) => {
  return (
    <Div className={className}>
      <StyledInput as={Input} />
      <StyledIcon as={Icon} color="#8c8c8c" />
    </Div>
  );
};
