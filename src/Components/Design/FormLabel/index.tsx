import styled from "styled-components";

import { COLORS } from "@Utils";

export const FormLabel = styled.label<{ htmlFor: string }>`
  font-size: 0.5em;
  color: ${COLORS.YELLOW};
  margin-bottom: 2px;
`;
