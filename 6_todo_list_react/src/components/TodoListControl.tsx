import { useState } from "react";
import styled from "styled-components";

interface TodoListControlProps {
  onAdd(content: string): void;
}

export function TodoListControl(props: TodoListControlProps) {
  const { onAdd } = props;

  const [input, setInput] = useState("");

  function submitValue() {
    onAdd(input);
    setInput("");
  }

  return (
    <TodoListControlBox>
      <ContentInput value={input} onChange={(e) => setInput(e.target.value)} />
      <SubmitButton onClick={submitValue}>+</SubmitButton>
    </TodoListControlBox>
  );
}

const TodoListControlBox = styled.div`
  display: flex;
`;

const ContentInput = styled.input`
  display: block;
  flex-grow: 1;

  height: 2em;
  padding: 0 0.5em;
  border: 1px solid gray;
  border-radius: 5px 0 0 5px;
  border-right: none;
  display: block;
  flex-grow: 1;
`;

const SubmitButton = styled.button`
  width: 4em;
  height: 2em;
  background-color: #03dac6;
  border: 1px solid gray;
  border-radius: 0 5px 5px 0;

  &:hover {
    background-color: #70efde;
  }

  &:active {
    background-color: #018786;
  }
`;
