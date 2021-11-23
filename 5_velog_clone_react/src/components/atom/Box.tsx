import { ReactNode } from "react";
import styled from "styled-components";

interface BoxProps {
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  width?: string;
  height?: string;
}

export const Box = styled.div<BoxProps>`
  margin-top: ${({ mt }) => mt ?? 0};
  margin-bottom: ${({ mb }) => mb ?? 0};
  margin-left: ${({ ml }) => ml ?? 0};
  margin-right: ${({ mr }) => mr ?? 0};

  width: ${({ width }) => width ?? "unset"};
  height: ${({ height }) => height ?? "unset"};
`;

export function CenterBox(props: BoxProps & { children: ReactNode }) {
  return <Box {...props} ml="auto" mr="auto" />;
}
