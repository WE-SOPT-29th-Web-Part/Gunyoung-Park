import { ReactNode } from "react";
import { Box, CenterBox } from "../atom/Box";

interface ArticleLayoutProps {
  topBar: ReactNode;
  contents: ReactNode;
}

export function ArticleLayout(props: ArticleLayoutProps) {
  return (
    <Box>
      <CenterBox width="100rem">{props.topBar}</CenterBox>
      <CenterBox width="70rem">{props.contents}</CenterBox>
    </Box>
  );
}
