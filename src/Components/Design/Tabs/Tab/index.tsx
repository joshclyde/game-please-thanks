import React, { FC } from "react";
import styled from "styled-components";

interface TabProps {
  className?: string;
  name: string;
  isSelected: boolean;
  onClick?: () => void;
}

const Div = styled.div<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? `#e6db78` : `#8C8C8C`)};
  width: fit-content;
  font-size: 0.625em;
  text-align: center;
`;

const Line = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? `#e6db78` : `#8C8C8C`)};
  height: 4px;
  border-radius: 1px;
  margin-top: 1px;
  min-width: 40px;
`;

export const Tab: FC<TabProps> = ({ className, name, isSelected, onClick }) => (
  <Div className={className} isSelected={isSelected} onClick={onClick}>
    {name}
    <Line isSelected={isSelected} />
  </Div>
);
