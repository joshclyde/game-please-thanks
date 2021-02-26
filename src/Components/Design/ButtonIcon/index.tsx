import styled from "styled-components";

// TODO: figure out all styling options for this button
export const ButtonIcon = styled.button<{ children: JSX.Element }>`
  background-color: #1a1a1a;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0px 0px;
  border-radius: 16px;
  transition-duration: 0.2s;
  --webkit-transition-duration: 0.2s /* Safari */;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: #dedcd9;
  }

  &:not(:disabled):active {
    background-color: #c5c4c1;
  }

  &:not(:disabled):focus {
    transition: outline 0s;
    outline: 2px solid #b2b2ff;
  }
`;
