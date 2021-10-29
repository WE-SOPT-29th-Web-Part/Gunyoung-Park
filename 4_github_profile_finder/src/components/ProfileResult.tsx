import { ReactElement } from "react";
import styled from "styled-components";
import { useGithubProfileInfo } from "../utils/hooks";
import { GlassCard } from "./GlassCard";
import { UserProfile } from "./UserProfile";

interface ProfileResultProps {
  username: string;
}

export function ProfileResult(props: ProfileResultProps) {
  if (props.username === "") {
    return null;
  }

  return (
    <GlassCard marginTop="1em">
      <ProfileResultContent {...props} />
    </GlassCard>
  );
}

function ProfileResultContent(props: ProfileResultProps): ReactElement {
  const { username = "" } = props;

  const { isLoading, isError, isNotFound, userInfo } =
    useGithubProfileInfo(username);

  if (isLoading) {
    return <LoadingBox>Loading...</LoadingBox>;
  }

  if (isError) {
    return <ErrorBox>ERROR</ErrorBox>;
  }

  if (isNotFound) {
    return <NotFoundBox>Not Found</NotFoundBox>;
  }

  if (userInfo === null) {
    return <div>NO</div>;
  }

  return <UserProfile userInfo={userInfo} />;
}

const LoadingBox = styled.div`
  margin: 1em 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;

const ErrorBox = styled.div`
  margin: 1em 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;

const NotFoundBox = styled.div`
  margin: 1em 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;
