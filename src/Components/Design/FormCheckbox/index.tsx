import React, { FC } from "react";
import styled from "styled-components";

import { Text } from "../Text";

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const StyledText = styled(Text)<{ checked: boolean }>`
  color: ${({ checked }) => (checked ? `#0FF1FF` : `#cccccc`)};
  margin-left: 16px;
`;

const Input = styled.input.attrs(() => ({ type: `checkbox` }))<{
  formId: string;
}>`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  border: ${({ checked }) => (checked ? undefined : `#cccccc solid 2px`)};
  background-color: ${({ checked }) => (checked ? `#0FF1FF` : undefined)};
  width: 16px;
  height: 16px;
  margin: 0px;

  cursor: pointer;
`;

export const FormCheckbox: FC<
  React.ComponentProps<typeof Input> & { label?: string }
> = ({ label, ...rest }) => {
  if (label) {
    return (
      <Label htmlFor={rest.id}>
        <Input {...rest} />
        <StyledText size="xs" checked={rest.checked}>
          {label}
        </StyledText>
      </Label>
    );
  }
  return <Input {...rest} />;
};
