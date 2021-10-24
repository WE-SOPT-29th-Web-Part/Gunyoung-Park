import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

const TextInput = styled.input`
  width: 4em;
`;

const TodayButton = styled.button``;

interface DatePickerProps {
  date: Date;
  onDateChange(date: Date): void;
}

export function DatePicker(props: DatePickerProps) {
  const { date, onDateChange = () => {} } = props;

  const [yearStr, setYearStr] = useState("");
  const [monthStr, setMonthStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setYearStr(date.getFullYear() + "");
    setMonthStr(date.getMonth() + 1 + "");
    setDateStr(date.getDate() + "");
  }, [date]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const isPositiveNumber =
      value.startsWith("-") || (value.length > 0 && isNaN(parseInt(value)));
    if (isPositiveNumber) {
      return;
    }

    let newDate: Date;
    switch (e.target.name) {
      case "year":
        setYearStr(value);
        newDate = new Date(`${value}/${monthStr}/${dateStr}`);
        break;
      case "month":
        setMonthStr(value);
        newDate = new Date(`${yearStr}/${value}/${dateStr}`);
        break;
      case "date":
        setDateStr(value);
        newDate = new Date(`${yearStr}/${monthStr}/${value}`);
        break;
    }

    const isValidDate = value !== "" && !isNaN(newDate!.getTime());
    if (isValidDate) {
      onDateChange(newDate!);
    }
  };

  function makeToday() {
    onDateChange(new Date());
  }

  return (
    <div>
      <TodayButton onClick={makeToday}>오늘</TodayButton>
      <div>
        <TextInput
          type="text"
          name="year"
          onChange={handleInputChange}
          value={yearStr}
        />
        년
        <TextInput
          type="text"
          name="month"
          onChange={handleInputChange}
          value={monthStr}
        />
        월
        <TextInput
          type="text"
          name="date"
          onChange={handleInputChange}
          value={dateStr}
        />
        일을 기준으로
      </div>
    </div>
  );
}
