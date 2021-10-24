import React from "react";
import { DatePresenter } from "./common/DatePresenter";
import { NumberInput } from "./common/NumberInput";

function DateFromX() {
  return (
    <div>
      <div>
        <NumberInput />
        일째 되는 날은?
      </div>
      <DatePresenter />
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
      <DatePresenter />
    </div>
  );
}

export function Result() {
  return (
    <div>
      <DateFromX></DateFromX>
      <DateToX></DateToX>
    </div>
  );
}
