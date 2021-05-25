import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.label<{ checked: boolean }>`
  color: ${({ checked }) => (checked ? `#0FF1FF` : `#cccccc`)};
  font-size: 0.5em;
  margin-left: 16px;
`;

const Input = styled.input.attrs(() => ({ type: `checkbox` }))<{
  formId: string;
}>`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: ${({ checked }) => (checked ? `#0FF1FF solid 4px` : `#cccccc solid 2px`)};
  width: 16px;
  height: 16px;
  margin: 0px;
`;

// TODO: make this better (e.g. change cursor, maybe wrap input in label?)
export const FormCheckbox: FC<
  React.ComponentProps<typeof Input> & { label?: string }
> = ({ label, ...rest }) => {
  if (label) {
    return (
      <Container>
        <Input {...rest} />
        <Label htmlFor={rest.id} checked={rest.checked}>
          {label}
        </Label>
      </Container>
    );
  }
  return <Input {...rest} />;
};
