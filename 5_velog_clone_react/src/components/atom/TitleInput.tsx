import React, { forwardRef } from "react";
import styled from "styled-components";

export const TitleInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    React.ClassAttributes<HTMLInputElement>
>(function TitleInput(props, ref) {
  return <TitleInputInner {...props} type="text" ref={ref}></TitleInputInner>;
});

const TitleInputInner = styled.input`
  display: block;

  border: none;
  font-size: 2.75rem;
  font-weight: 600;
  outline: none;

  color: #212529;

  &::placeholder {
    color: lightgray;
  }
`;
