import styled from "styled-components";

import { COLORS } from "@Utils";

export const Button = styled.button`
  background-color: ${COLORS.GREY};
  border: none;
  color: ${COLORS.BLACK};
  padding: 8px 20px;
  cursor: pointer;
  font-size: 0.75em;
  transition-duration: 0.2s;
  --webkit-transition-duration: 0.2s /* Safari */;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${COLORS.CYAN};
  }

  &:not(:disabled):active {
    background-color: ${COLORS.BLUE};
  }

  &:not(:disabled):focus {
    transition: outline 0s;
    outline: 2px solid ${COLORS.PINK};
  }
`;
