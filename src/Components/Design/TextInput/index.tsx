import styled from "styled-components";

export const TextInput = styled.input.attrs(() => ({
  type: `text`,
}))`
  width: 100%;
  height: 32px;
  background: #1a1a1a;
  border: 1px solid #8c8c8c;
  box-sizing: border-box;
  border-radius: 2px;
  color: #cccccc;
  padding-left: 8px;
`;
