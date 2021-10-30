import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

interface NumberInputProps {
  onValueChange?(value: number): void;
  value?: number;
  className?: string;
  align?: "left" | "center" | "right";
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
    const num = +e.target.value;

    if (e.target.value === "") {
      setRaw("");
    } else if (!e.target.value.includes("-") && !isNaN(num)) {
      setRaw(e.target.value);
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
  padding: 0 0.2em;
  background-color: transparent;

  border: none;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);

  color: inherit;

  text-align: ${(props) => props.align ?? "left"};

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
