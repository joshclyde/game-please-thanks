import React, { FC } from "react";
import styled from "styled-components";

const Svg = styled.svg`
  cursor: pointer;
`;

export const IconBackArrow: FC<any> = (props) => {
  return (
    <Svg
      {...props}
      width="21"
      height="16"
      rotate="180"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="16"
        width="16"
        height="3"
        transform="rotate(-90 6 16)"
        fill="#ECFF0F"
      />
      <rect
        x="4"
        y="14"
        width="12"
        height="4"
        transform="rotate(-90 4 14)"
        fill="#ECFF0F"
      />
      <rect
        x="2"
        y="12"
        width="8"
        height="11"
        transform="rotate(-90 2 12)"
        fill="#ECFF0F"
      />
      <rect y="10" width="4" height="12" transform="rotate(-90 0 10)" fill="#ECFF0F" />
      <rect
        x="8"
        y="13"
        width="10"
        height="5"
        transform="rotate(-90 8 13)"
        fill="#0D0D0D"
      />
      <rect
        x="6"
        y="11"
        width="4"
        height="5"
        transform="rotate(-90 6 11)"
        fill="#0D0D0D"
      />
      <rect x="6" y="9" width="4" height="5" transform="rotate(-90 6 9)" fill="#0D0D0D" />
      <rect x="4" y="9" width="2" height="5" transform="rotate(-90 4 9)" fill="#0D0D0D" />
      <rect
        x="4"
        y="10"
        width="4"
        height="17"
        transform="rotate(-90 4 10)"
        fill="#ECFF0F"
      />
    </Svg>
  );
};
