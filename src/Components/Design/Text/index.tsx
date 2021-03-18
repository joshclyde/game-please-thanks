import styled from "styled-components";

interface TextProps {
  soft?: boolean;
  size?: "xs" | "small";
}

const sizes = {
  xs: `0.625em`,
  small: `0.75em`,
};

// TODO: make some stories for this
export const Text = styled.p<TextProps>`
  color: ${(props) => (props.soft ? props.theme.softText : props.theme.text)};
  font-size: ${(props) => sizes[props.size || `small`]};
`;
