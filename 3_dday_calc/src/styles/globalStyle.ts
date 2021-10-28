import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    box-sizing: border-box;

    /* background-color: ${colors.background}; */
    background: linear-gradient(320deg,#f27121,#e94057,#8a2387);
    color: ${colors.foreground};
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    height: 100vh;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }


`;

export default GlobalStyle;
