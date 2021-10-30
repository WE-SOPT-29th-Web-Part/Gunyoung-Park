import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const TextInput = styled.input<{ width?: string }>`
  width: ${(props) => props.width ?? "2.5em"};
  padding: 0.05em 0.3em;
  background-color: transparent;

  border: none;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);

  text-align: center;
  font-size: 1.5em;

  color: inherit;

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
  margin-left: 0.2em;
  margin-right: 0.6em;
`;

const TodayButton = styled.button`
  border: 1px solid white;
  background-color: transparent;
  border-radius: 5000px;

  color: inherit;
  cursor: pointer;

  width: 4em;
  font-size: 1.1em;

  transition: background-color 0.15s;

  &:hover {
    background-color: rgb(231, 231, 231, 0.1);
  }

  &:active {
    background-color: rgb(231, 231, 231, 0.2);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding-left: 4em;
  padding-bottom: 0.6em;
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
    <Container>
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
        width="1.5em"
        onChange={handleInputChange}
        value={monthStr}
      />
      <DateLabel>월</DateLabel>
      <TextInput
        type="text"
        name="date"
        width="1.5em"
        onChange={handleInputChange}
        value={dateStr}
      />
      <DateLabel>일</DateLabel>
      <TodayButton onClick={makeToday}>Today</TodayButton>
    </Container>
  );
}
