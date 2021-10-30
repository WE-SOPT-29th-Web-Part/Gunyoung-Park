import { createGlobalStyle, keyframes } from "styled-components";
import colors from "./colors";

const backgroundAnimation = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
}
  body {
    margin: 0;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    box-sizing: border-box;

    background: rgb(242,113,33);
    background: linear-gradient(320deg,#f27121,#e94057,#8a2387,#23a6d5);
    background-size: 400% 400%;

    animation: ${backgroundAnimation} 30s ease infinite;


    color: ${colors.foreground};
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    height: 100%;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }


`;

export default GlobalStyle;
