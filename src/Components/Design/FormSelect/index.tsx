import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "@Utils";

const Container = styled.div``;

const Label = styled.label<{ htmlFor: string }>`
  display: inline-block;
  font-size: 0.5em;
  color: ${COLORS.YELLOW};
  margin-bottom: 2px;
`;

const Select = styled.select<{
  formId: string;
}>`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 32px;
  background: ${COLORS.BLACK};
  border: 1px solid ${COLORS.GREY};
  border-width: 1px 1px 4px 1px;
  box-sizing: border-box;
  color: ${COLORS.GREY};
  padding-left: 8px;
  font-size: 0.5em;
`;

export const FormSelect: FC<React.ComponentProps<typeof Select> & { label?: string }> = ({
  label,
  ...rest
}) => {
  if (label) {
    return (
      <Container>
        <Label htmlFor={rest.id}>{label}</Label>
        <Select {...rest} />
      </Container>
    );
  }
  return <Select {...rest} />;
};
