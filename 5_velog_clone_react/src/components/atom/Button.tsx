import styled from "styled-components";

export const RoundButton = styled.button`
  border-radius: 1em;
  border: 1px solid black;

  font-size: 1em;
  font-weight: 500;
  background-color: white;
  height: 2em;
  padding: 0.2em 1em;

  transition: all 0.125s ease-in 0s;
  cursor: pointer;

  &:hover {
    background-color: rgb(43, 43, 61);
    color: white;
  }
`;

export const IconButton = styled.button`
  font-size: 1em;
  height: 2em;
  width: 2em;

  border-radius: 50%;
  border: none;
  background-color: transparent;
`;

export const Button = styled.button``;
