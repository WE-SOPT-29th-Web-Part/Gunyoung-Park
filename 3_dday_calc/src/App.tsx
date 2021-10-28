import { useState } from "react";
import styled, { css } from "styled-components";

import { DatePicker } from "./components/DatePicker";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { SubHeader } from "./components/SubHeader";

const glass = css`
  background: rgba(236, 228, 228, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(236, 228, 228, 0.3);
`;

const Container = styled.div`
  border: 1px solid gray;
  width: 30rem;
  margin: auto;
  margin-top: 5rem;

  ${glass}
`;

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Container>
      <Header />
      <DatePicker
        date={currentDate}
        onDateChange={(date) => setCurrentDate(date)}
      />
      <SubHeader />
      <Result currentDate={currentDate} />
      <Footer />
    </Container>
  );
}

export default App;
