import styled from "styled-components";
import { IconButton, RoundButton } from "../../atom/Button";
import { NavBar } from "../../atom/NavBar";

import { MdSearch } from "react-icons/md";
import { ImageDropdown } from "../../atom/ImageDrodown";
import { useUserInfo } from "../../../states/user";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const userInfo = useUserInfo();

  const navigate = useNavigate();

  return (
    <NavBar
      left={<Logo>telog</Logo>}
      right={
        <>
          <IconButton>
            <MdSearch />
          </IconButton>
          <RoundButton onClick={() => navigate("/write")}>
            새 글 작성
          </RoundButton>
          <ImageDropdown imageSrc={userInfo.profileImg} />
        </>
      }
    />
  );
}

const Logo = styled.h1`
  margin: 0;
`;
