import styled from "styled-components";
import { IconButton, RoundButton } from "../atom/Button";
import { NavBar } from "../atom/NavBar";

import { MdSearch } from "react-icons/md";
import { ImageDropdown } from "../atom/ImageDrodown";
import { useUserInfo } from "../../states/user";

export function TopBar() {
  const userInfo = useUserInfo();

  return (
    <NavBar
      left={<Logo>velog</Logo>}
      right={
        <>
          <IconButton>
            <MdSearch />
          </IconButton>
          <RoundButton>새 글 작성</RoundButton>
          <ImageDropdown imageSrc={userInfo.profileImg} />
        </>
      }
    />
  );
}

const Logo = styled.h1`
  margin: 0;
`;
