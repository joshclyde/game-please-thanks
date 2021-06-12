import styled from "styled-components";

import { COLORS } from "@Utils";

interface TextProps {
  soft?: boolean;
  size?: "xs" | "small";
}

const sizes = {
  xs: `0.625em`,
  small: `0.75em`,
};

export const Text = styled.p<TextProps>`
  color: ${COLORS.GREY};
  font-size: ${(props) => sizes[props.size || `small`]};
  margin: 0px;
`;
