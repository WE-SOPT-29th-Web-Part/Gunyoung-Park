import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

interface NumberInputProps {
  onValueChange?(value: number): void;
  value?: number;
  className?: string;
}

export const NumberInput = styled(function NumberInput(
  props: NumberInputProps
) {
  const { value = 1, onValueChange = () => {}, className = "" } = props;

  const [raw, setRaw] = useState("");

  useEffect(() => {
    setRaw(value + "");
  }, [value]);

  function valueChanged(e: ChangeEvent<HTMLInputElement>) {
    setRaw(e.target.value);

    const num = parseInt(e.target.value);

    if (!isNaN(num)) {
      onValueChange(num);
    }
  }

  return (
    <input
      type="text"
      className={className}
      value={raw}
      onChange={valueChanged}
    />
  );
})`
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
