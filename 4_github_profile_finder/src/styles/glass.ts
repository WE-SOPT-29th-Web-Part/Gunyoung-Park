import { css } from "styled-components";

export const glassBackground = css`
  background-color: rgba(16 18 27 / 40%);
  border-radius: 14px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
`;

export const subGlassBackground = css`
  background-color: rgb(146 151 179 / 13%);
  border-radius: 14px;
  /* border: 1px solid rgba(16 18 27 / 40%); */
`;

export const bottomLine = css`
  border-bottom: 1px solid rgba(113 119 144 / 25%);
`;
