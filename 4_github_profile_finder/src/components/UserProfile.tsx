import { ReactElement } from "react";
import styled from "styled-components";
import { GithubUserInfo } from "../utils/api";
import { SubGlassCard } from "./GlassCard";

export function UserProfile(props: { userInfo: GithubUserInfo }): ReactElement {
  const { userInfo } = props;

  return (
    <Container>
      <ProfileImage src={userInfo.avatar_url} />
      <Name>{userInfo.name}</Name>
      <UserName>{userInfo.login}</UserName>
      <Bio>{userInfo.bio}</Bio>

      <VisitButton href={userInfo.html_url}>Visit {userInfo.login}</VisitButton>
      <NumberInfoContainer>
        <NumberInfo label="Followers" value={userInfo.followers} />
        <NumberInfo label="Following" value={userInfo.following} />
        <NumberInfo label="Repos" value={userInfo.public_repos} />
      </NumberInfoContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 1.5em 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  display: block;
  height: 10em;
  width: 10em;
`;

const Name = styled.h2`
  margin-top: 0.4em;
  font-size: 1.7rem;
  font-weight: 400;
`;
const UserName = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
`;
const Bio = styled.p`
  font-size: 1.1rem;
  margin-top: 0.1em;
  overflow-wrap: break-word;
  text-align: center;
`;

const NumberInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;

  width: 100%;
`;

interface NumberInfoProps {
  label: string;
  value: number;
}

function NumberInfo(props: NumberInfoProps) {
  const { label, value } = props;
  return (
    <NumberInfoBox>
      <h4>{label}</h4>
      <p>{value}</p>
    </NumberInfoBox>
  );
}

const NumberInfoBox = styled(SubGlassCard)`
  text-align: center;
  width: 8em;
  padding: 0.8em 0;

  & h4 {
    font-weight: 500;
    font-size: 1rem;
  }

  & p {
    font-size: 1.6rem;
  }
`;

const VisitButton = styled.a`
  border-radius: 5000px;
  border: 1px solid lightgray;
  color: lightgray;

  display: block;
  margin-top: 1.5rem;
  padding: 0.3em 1em;

  text-decoration: none;

  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: white;
    border: 1px solid white;
  }
`;
