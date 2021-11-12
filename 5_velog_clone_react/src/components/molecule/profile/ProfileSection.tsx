import styled from "styled-components";
import { useUserInfo } from "../../../states/user";

export function ProfileSection() {
  const userInfo = useUserInfo();

  return (
    <ProfileSectionBox>
      <img src={userInfo.profileImg} alt="" />
      <h3>{userInfo.name}</h3>
    </ProfileSectionBox>
  );
}

const ProfileSectionBox = styled.div`
  display: flex;
  align-items: center;

  padding: 0.8em 0;

  border-bottom: 1px solid gray;

  & > h3 {
    margin-left: 1em;
  }
`;
