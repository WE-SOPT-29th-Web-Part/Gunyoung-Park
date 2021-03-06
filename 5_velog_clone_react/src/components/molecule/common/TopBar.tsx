import styled from "styled-components";
import { IconButton, RoundButton } from "../../atom/Button";
import { NavBar } from "../../atom/NavBar";

import { MdSearch } from "react-icons/md";
import { ImageDropdown } from "../../atom/ImageDrodown";
import { useUserInfo } from "../../../states/user";
import { Link, useNavigate } from "react-router-dom";

export function TopBar() {
  const userInfo = useUserInfo();

  const navigate = useNavigate();

  return (
    <NavBar
      left={
        <NoStyleLink to="/">
          <Logo>telog</Logo>
        </NoStyleLink>
      }
      right={
        <>
          <IconButton>
            <MdSearch />
          </IconButton>
          <RoundButton onClick={() => navigate("/write")}>
            μ κΈ μμ±
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

const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
