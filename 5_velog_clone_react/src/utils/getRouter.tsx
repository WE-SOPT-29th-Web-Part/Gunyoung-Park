import { ReactNode } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

interface SelectableRouterProps {
  children: ReactNode;
}

export function SeletableRouter(props: SelectableRouterProps) {
  if (process.env.REACT_APP_ROUTER_MODE === "HASH") {
    return <HashRouter>{props.children}</HashRouter>;
  } else {
    return <BrowserRouter>{props.children}</BrowserRouter>;
  }
}
