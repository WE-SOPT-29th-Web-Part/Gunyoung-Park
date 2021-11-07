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

  return (
    <TodoListBox>
      <TodoListLabel>{props.label}</TodoListLabel>
      <TodoListItemContainer>
        {list.map((item, idx) => (
          <TodoListItem key={idx}>{item.content}</TodoListItem>
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
`;

const TodoListLabel = styled.h2``;

const TodoListItemContainer = styled.ul`
  width: 100%;
  flex-grow: 1;

  text-decoration: none;
`;

const TodoListItem = styled.li``;
