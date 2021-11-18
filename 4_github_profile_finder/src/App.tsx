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

  function usernameChange(val: string | null) {
    if (val === "") {
      return;
    }
    if (val === null) {
      setUsername("");
      return;
    }

    setUsername(val);
  }

  return (
    <Container>
      <ProfileSearch onSearch={usernameChange} />
      <ProfileResult username={username} onClose={() => usernameChange(null)} />
    </Container>
  );
}

export default App;
