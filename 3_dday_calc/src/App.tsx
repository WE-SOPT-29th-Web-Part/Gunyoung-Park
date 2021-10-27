import { useState } from "react";
import styled from "styled-components";

import { DatePicker } from "./components/DatePicker";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { SubHeader } from "./components/SubHeader";

const Container = styled.div`
  border: 1px solid gray;
  width: 30rem;
  margin: auto;
  margin-top: 5rem;

  background-color: white;
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
