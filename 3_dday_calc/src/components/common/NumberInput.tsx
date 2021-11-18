import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";
import colors from "../../styles/colors";

interface NumberInputProps {
  onValueChange?(value: number): void;
  value?: number;
  className?: string;
  align?: "left" | "center" | "right";
}

export function NumberInput(props: NumberInputProps) {
  const { value = 1, onValueChange = () => {}, className = "", align } = props;

  const inputRef = useRef(null);

  const [raw, setRaw] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setRaw(value + "");
  }, [value]);

  useEffect(() => {
    if (isError) {
      gsap.to(inputRef.current, {
        x: 3,
        yoyo: true,
        repeat: 3,
        duration: 0.1,
      });
    }
  }, [isError]);

  function valueChanged(e: ChangeEvent<HTMLInputElement>) {
    const num = +e.target.value;

    if (e.target.value === "") {
      setIsError(true);
      setRaw("");
    } else if (!e.target.value.includes("-") && !isNaN(num)) {
      setIsError(false);
      setRaw(e.target.value);
      onValueChange(num);
    } else {
      setIsError(true);
      setRaw("");
    }
  }

  return (
    <StyledNumberInput
      ref={inputRef}
      type="text"
      className={className}
      value={raw}
      onChange={valueChanged}
      align={align}
      error={isError}
    />
  );
}

const StyledNumberInput = styled.input<{ align?: string; error?: boolean }>`
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

  transition: border-color 0.3s, background-color 0.3s;

  ${(props) =>
    props.error
      ? css`
          background-color: rgba(255, 33, 33, 0.5);
        `
      : ""}

  &:hover {
    border-color: ${colors.primary};
  }

  &:focus-visible {
    border-color: ${colors.primary};
    outline: none;
  }
`;
