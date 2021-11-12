import { useState } from "react";
import styled from "styled-components";
import { TodoListControl } from "./TodoListControl";

interface TodoListProps {
  label: string;
}

interface Todo {
  content: string;
}

export function TodoList(props: TodoListProps) {
  const [list, setList] = useState<Todo[]>([]);

  function addTodo(content: string) {
    setList((list) => [...list, { content }]);
  }

  function removeTodo(idx: number) {
    const newList = [...list];
    newList.splice(idx, 1);
    setList(newList);
  }

  return (
    <TodoListBox>
      <TodoListLabel>{props.label}</TodoListLabel>
      <TodoListItemContainer>
        {list.map((item, idx) => (
          <TodoListItem key={idx}>
            {item.content}
            <TodoListItemDelete onClick={() => removeTodo(idx)}>
              X
            </TodoListItemDelete>
          </TodoListItem>
        ))}
      </TodoListItemContainer>
      <TodoListControl onAdd={addTodo} />
    </TodoListBox>
  );
}

const TodoListBox = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 1em 2em;
  border: 1px solid black;
`;

const TodoListLabel = styled.h2`
  font-size: 1.7em;
  font-weight: 500;
`;

const TodoListItemContainer = styled.ul`
  width: 100%;
  flex-grow: 1;

  text-decoration: none;
`;

const TodoListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 1em 0.5em;

  &:not(:last-child) {
    border-bottom: 1px dashed lightgray;
  }
`;

const TodoListItemDelete = styled.button`
  height: 2.5em;
  width: 2.5em;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  text-align: center;

  &:hover {
    background-color: rgb(236, 236, 236);
  }

  &:active {
    background-color: lightgray;
  }
`;
