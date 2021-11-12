import { createGlobalStyle, css } from "styled-components";

const background = css`
  background-color: #4158d0;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
`;

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
    }

    html {
        font-family: 'Poppins', sans-serif;


    }

    body {
        ${background};

        height: 100vh;
        font-size: 16px;

        color: white;
    }

    
`;

export default GlobalStyle;
