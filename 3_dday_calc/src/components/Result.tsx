import styled from "styled-components";
import { DateFromX } from "./DateFromX";
import { DateToX } from "./DateToX";

interface ResultProps {
  currentDate: Date;
}

export function Result(props: ResultProps) {
  const { currentDate } = props;

  return (
    <Container>
      <DateFromX currentDate={currentDate}></DateFromX>
      <DateToX currentDate={currentDate}></DateToX>
    </Container>
  );
}

const Container = styled.div`
  width: 18em;
  margin: 0 auto;
`;
