import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const TextInput = styled.input`
  width: 2.5em;
  background-color: transparent;
  border-width: 0 0 3px 0;
  border-color: ${colors.lightPrimary};

  text-align: right;
  font-size: 1.5em;

  transition: border-color 0.3s;

  &:hover {
    border-color: ${colors.primary};
  }

  &:focus-visible {
    border-color: ${colors.primary};
    outline: none;
  }
`;

const DateLabel = styled.label`
  margin-right: 0.6em;
`;

const TodayButton = styled.button`
  border: 1px solid transparent;
  background-color: lightgray;
  border-radius: 5px;
`;

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
      <TextInput
        type="text"
        name="year"
        onChange={handleInputChange}
        value={yearStr}
      />
      <DateLabel>년</DateLabel>
      <TextInput
        type="text"
        name="month"
        onChange={handleInputChange}
        value={monthStr}
      />
      <DateLabel>월</DateLabel>
      <TextInput
        type="text"
        name="date"
        onChange={handleInputChange}
        value={dateStr}
      />
      <DateLabel>일</DateLabel>
      <TodayButton onClick={makeToday}>Today</TodayButton>
    </div>
  );
}
