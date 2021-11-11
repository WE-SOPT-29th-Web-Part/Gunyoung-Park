import React, { forwardRef } from "react";
import styled from "styled-components";

export const TitleInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    React.ClassAttributes<HTMLInputElement>
>(function TitleInput(props, ref) {
  return <TitleInputInner {...props} type="text" ref={ref}></TitleInputInner>;
});

const TitleInputInner = styled.input``;
