import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }
    
    html {
        font-family: "Noto Sans KR", sans-serif;
    }


    body {
        overflow-x: hidden;
    }
    
`;
