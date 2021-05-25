import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Label = styled.label<{ htmlFor: string }>`
  display: inline-block;
  font-size: 0.5em;
  color: #ecff0f;
  margin-bottom: 2px;
`;

const Input = styled.input.attrs(({ type }) => ({
  type: type || `text`,
}))<{
  formId: string;
}>`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 32px;
  background: #0d0d0d;
  border: 1px solid #ffffff;
  border-width: 1px 1px 4px 1px;
  box-sizing: border-box;
  color: #cccccc;
  padding-left: 8px;
  font-size: 0.5em;
`;

export const FormTextInput: FC<
  React.ComponentProps<typeof Input> & { label?: string }
> = ({ label, ...rest }) => {
  if (label) {
    return (
      <Container>
        <Label htmlFor={rest.id}>{label}</Label>
        <Input {...rest} />
      </Container>
    );
  }
  return <Input {...rest} />;
};
