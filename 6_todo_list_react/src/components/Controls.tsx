import styled from "styled-components";

interface ControlsProps {
  items?: {
    key: string;
    content: string;
  }[];
  onClick?(key: string): void;
}

export function Controls(props: ControlsProps) {
  const { items = [], onClick } = props;

  function handleControlClick(key: string) {
    return function () {
      onClick?.call(null, key);
    };
  }

  return (
    <ControlsBox>
      {items.map((item) => (
        <ControlButton key={item.key} onClick={handleControlClick(item.key)}>
          {item.content}
        </ControlButton>
      ))}
    </ControlsBox>
  );
}

const ControlsBox = styled.div`
  width: fit-content;
  margin: 0.5em auto;

  & > *:not(:last-child) {
    margin-right: 0.3em;
  }
`;

const ControlButton = styled.button`
  padding: 0.3em 0.5em;
  background-color: #03dac6;
  color: black;
  border: none;

  &:hover {
    background-color: #03dac6;
  }

  &:active {
    background-color: #018786;
  }
`;
