import { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { Controls } from "./Controls";
import { TodoList } from "./TodoList";

export function MainArea() {
  const [viewMode, setViewMode] = useState("both");

  function onViewModeChange(key: string) {
    setViewMode(key);
  }

  return (
    <MainAreaBox>
      <Controls
        items={[
          { content: "오늘만 보기", key: "left" },
          { content: "내일만 보기", key: "right" },
          { content: "함께 보기", key: "both" },
        ]}
        onClick={(mode) => onViewModeChange(mode)}
      />
      <Splitted
        left={<TodoList label="오늘 할 일" />}
        right={<TodoList label="내일 할 일" />}
        mode={viewMode}
      />
    </MainAreaBox>
  );
}

const MainAreaBox = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

interface SplittedProps {
  left: ReactElement;
  right: ReactElement;
  mode: string;
}

function Splitted(props: SplittedProps) {
  const { mode } = props;

  return (
    <SplittedBox left={mode === "left"} right={mode === "right"}>
      {props.left}
      {props.right}
    </SplittedBox>
  );
}

const SplittedBox = styled.div<{ left: boolean; right: boolean }>`
  display: flex;
  flex-grow: 1;

  & > * {
    width: 100%;
    transition: width 0.2s;
  }

  & > *:first-child {
    ${(props) => (props.right ? hidden : "")}
  }

  & > *:last-child {
    ${(props) => (props.left ? hidden : "")}
  }
`;

const hidden = css`
  overflow: hidden;
  width: 0;
  padding-left: 0;
  padding-right: 0;
`;
