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
  height: 30rem;
  margin: auto;
  margin-top: 5rem;
`;

function useDate() {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [date, setDate] = useState(currentDate.getDate());

  function fromJSDate(date: Date) {
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
    setDate(date.getDate());
  }

  function toJSDate() {
    return new Date(year, month - 1, date);
  }

  return { year, month, date, fromJSDate, toJSDate };
}

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
      {JSON.stringify(currentDate)}
    </Container>
  );
}

export default App;
