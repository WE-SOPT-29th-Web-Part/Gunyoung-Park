import { ReactNode } from "react";
import { Box, CenterBox } from "../atom/Box";

interface HomeLayoutProps {
  topBar: ReactNode;
  profileArea: ReactNode;
  contents: ReactNode;
}

export function HomeLayout(props: HomeLayoutProps) {
  return (
    <Box>
      <CenterBox width="100rem">{props.topBar}</CenterBox>
      <CenterBox width="70rem" mt="3rem" mb="1rem">
        {props.profileArea}
      </CenterBox>
      <CenterBox width="70rem">{props.contents}</CenterBox>
    </Box>
  );
}
