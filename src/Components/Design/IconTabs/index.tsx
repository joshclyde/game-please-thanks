import React, { FC } from "react";
import styled from "styled-components";

import { IconProps } from "../Icons/types";

interface IconTabsProps {
  className?: string;
  index: number;
  icons: Array<FC<IconProps>>;
  onClickIcon: (index: number) => void;
}

const Div = styled.div`
  display: flex;
  column-gap: 4px;
`;

export const IconTabs: FC<IconTabsProps> = ({ className, index, icons, onClickIcon }) => {
  return (
    <Div className={className}>
      {icons.map((Icon, currentIndex) => {
        return (
          <Icon
            onClick={() => onClickIcon(currentIndex)}
            color={index === currentIndex ? `#E6DB78` : `#8C8C8C`}
          />
        );
      })}
    </Div>
  );
};
