import styled from "styled-components";
import { glassBackground, subGlassBackground } from "../styles/glass";

interface GlassCardAddiProps {
  marginTop?: string;
  marginBottom?: string;
  height?: string;
}

export const GlassCard = styled.div<GlassCardAddiProps>`
  ${glassBackground}

  width: 40em;

  display: flex;
  flex-direction: column;

  margin-top: ${(props) => props.marginTop ?? "0"};
  margin-bottom: ${(props) => props.marginBottom ?? "0"};
  height: ${(props) => props.height ?? "unset"};
`;

export const SubGlassCard = styled.div`
  ${subGlassBackground}
`;
