import styled from "styled-components";
import { ProfileSearch } from "./components/ProfileSearch";

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 5em;
`;

function App() {
  return (
    <Container>
      <ProfileSearch />
    </Container>
  );
}

export default App;
