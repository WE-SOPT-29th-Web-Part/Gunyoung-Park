import { useState } from "react";
import styled from "styled-components";
import { addDays } from "../util/datefn";
import { DatePresenter } from "./common/DatePresenter";
import { NumberInput } from "./common/NumberInput";

interface DateToXProps {
  currentDate: Date;
}

export function DateToX(props: DateToXProps) {
  const { currentDate } = props;

  const [days, setDays] = useState(1);

  const addedDate = addDays(currentDate, -days);

  return (
    <Container>
      <div>
        <DLabel>D-</DLabel>
        <NumberInput
          onValueChange={(v) => setDays(v)}
          value={days}
          align="left"
        />
      </div>
      <DatePresenter date={addedDate} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DLabel = styled.span`
  font-size: 1.4em;
  width: 1.5em;
  display: inline-block;
`;
