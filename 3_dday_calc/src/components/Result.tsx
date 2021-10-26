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
        <NumberInput onValueChange={(v) => setDays(v)} value={days} />
        일째 되는 날은?
      </div>
      <DatePresenter date={addedDate} />
    </div>
  );
}

interface DateToXProps {
  currentDate: Date;
}

function DateToX(props: DateToXProps) {
  const { currentDate } = props;

  const [days, setDays] = useState(1);

  const addedDate = addDays(currentDate, -days);

  return (
    <div>
      <div>
        D-
        <NumberInput onValueChange={(v) => setDays(v)} value={days} />
        는?
      </div>
      <DatePresenter date={addedDate} />
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
      <DateToX currentDate={currentDate}></DateToX>
    </div>
  );
}
