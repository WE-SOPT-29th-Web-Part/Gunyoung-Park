import { useState } from "react";
import styled from "styled-components";
import { ProfileResult } from "./components/ProfileResult";
import { ProfileSearch } from "./components/ProfileSearch";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5em;
`;

function App() {
  const [username, setUsername] = useState("");

  function usernameChange(val: string) {
    if (val === "") {
      return;
    }
    setUsername(val);
  }

  return (
    <Container>
      <ProfileSearch onSearch={usernameChange} />
      <ProfileResult username={username} />
    </Container>
  );
}

export default App;
