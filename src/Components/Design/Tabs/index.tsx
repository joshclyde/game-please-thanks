import React, { FC } from "react";
import styled from "styled-components";

import { Tab } from "./Tab";

interface TabsProps {
  className?: string;
  index: number;
  names: Array<string>;
  onClickTab: (index: number) => void;
}

const Div = styled.div`
  display: flex;
  column-gap: 4px;
`;

export const Tabs: FC<TabsProps> = ({ names, index, onClickTab, className }) => {
  return (
    <Div className={className}>
      {names.map((name, currentIndex) => {
        return (
          <Tab
            name={name}
            isSelected={index === currentIndex}
            onClick={() => onClickTab(currentIndex)}
          />
        );
      })}
    </Div>
  );
};
