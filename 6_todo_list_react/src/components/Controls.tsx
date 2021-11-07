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
  margin: 0 auto;
`;

const ControlButton = styled.button``;
