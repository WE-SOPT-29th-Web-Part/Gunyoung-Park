import styled, { css } from "styled-components";

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

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: none;
  background-color: transparent;
  transition: background-color 0.3s;

  cursor: pointer;

  &:hover {
    background-color: #e2e2e2;
  }
`;

export const LinkIconButton = styled.a`
  display: block;

  height: 32px;
  width: 32px;

  color: gray;
  fill: gray;
  transition: color 0.3s, fill 0.3s;

  &:hover {
    color: black;
    fill: black;
  }
`;

interface ButtonProps {
  variant?: ButtonVariants;
}

type ButtonVariants = "success" | "transparent";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  height: 2.5rem;
  padding: 0 1.3rem;
  font-size: 1.2rem;
  font-weight: bold;

  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  transition: background-color 0.2s;

  & > svg:first-child {
    margin-right: 0.5em;
  }

  ${(props) => buttonVariantValue(props.variant)}
`;

function buttonVariantValue(variant?: ButtonVariants) {
  switch (variant) {
    case "success":
      return css`
        background-color: #12b886;
        color: white;

        &:hover {
          background-color: #20c997;
        }
      `;
    case "transparent":
      return css`
        background-color: transparent;
        color: black;
        font-weight: normal;

        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
      `;
    default:
      return css`
        background-color: #e9ecef;
        color: black;

        &:hover {
          background-color: #f1f3f5;
        }
      `;
  }
}
