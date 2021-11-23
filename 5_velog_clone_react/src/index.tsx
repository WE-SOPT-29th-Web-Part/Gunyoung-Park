import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/globalStyle";
import { SeletableRouter } from "./utils/getRouter";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SeletableRouter>
      <App />
    </SeletableRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
