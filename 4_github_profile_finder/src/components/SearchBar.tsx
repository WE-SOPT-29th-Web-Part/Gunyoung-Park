import { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";

interface SearchBarProps {
  className?: string;
  placeHolder?: string;

  value?: string;
  onChange?(val: string): void;
  onSubmit?(val: string): void;
  onFocus?(): void;
}

function SearchBarRaw(props: SearchBarProps) {
  const {
    placeHolder = "",
    value = undefined,
    onChange = () => {},
    onSubmit = () => {},
    onFocus = () => {},
  } = props;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSubmit(e.currentTarget.value);
    }
  }

  function handleFocus() {
    onFocus();
  }

  return (
    <div className={props.className}>
      <SearchInput
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onClick={handleFocus}
      />
    </div>
  );
}

const SearchInput = styled.input`
  display: block;
  width: 100%;

  border: none;
  border-radius: 4px;
  padding: 0.5em 0.8em;

  box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);

  background-color: #14162b;
  color: inherit;

  font-size: 1.1rem;

  outline: none;
`;

export const SearchBar = styled(SearchBarRaw)`
  display: flex;
`;
