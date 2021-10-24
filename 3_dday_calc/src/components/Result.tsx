import { useState } from "react";
import { addDays } from "../util/datefn";
import { DatePresenter } from "./common/DatePresenter";
import { NumberInput } from "./common/NumberInput";

interface DateFromXProps {
  currentDate: Date;
}

function DateFromX(props: DateFromXProps) {
  const { currentDate } = props;

  const [days, setDays] = useState(1);

  const addedDate = addDays(currentDate, days - 1);

  return (
    <div>
      <div>
        <NumberInput onValueChange={(v) => setDays(v)} />
        일째 되는 날은?
      </div>
      <DatePresenter date={addedDate} />
    </div>
  );
}

function DateToX() {
  return (
    <div>
      <div>
        D-
        <NumberInput />
        는?
      </div>
      {/* <DatePresenter /> */}
    </div>
  );
}

interface ResultProps {
  currentDate: Date;
}

export function Result(props: ResultProps) {
  const { currentDate } = props;

  return (
    <div>
      <DateFromX currentDate={currentDate}></DateFromX>
      <DateToX></DateToX>
    </div>
  );
}
