import styled from "styled-components";

export const Button = styled.button`
  background-color: #f7f5f2;
  border: none;
  color: #313130;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
  transition-duration: 0.2s;
  --webkit-transition-duration: 0.2s /* Safari */;

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
