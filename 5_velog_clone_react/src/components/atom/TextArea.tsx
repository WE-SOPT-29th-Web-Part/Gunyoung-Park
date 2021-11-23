import { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface TextAreaLimitedProps {
  value: string;
  onChange(e: ChangeEvent<HTMLTextAreaElement>): void;
  placeholder?: string;
  limit?: number;

  className?: string;
}

export function TextAreaLimited(props: TextAreaLimitedProps) {
  const { limit, onChange, value, ...rest } = props;

  const [isFull, setIsFull] = useState(false);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (limit !== undefined) {
      if (e.target.value.length > limit) {
        setIsFull(true);
        return;
      } else {
        setIsFull(false);
      }
    }
    onChange(e);
  }

  return (
    <TextAreaLimitedBox isFull={isFull}>
      <TextAreaInner {...rest} onChange={handleChange} value={value} />
      <div>
        {value.length}/{limit}
      </div>
    </TextAreaLimitedBox>
  );
}

const TextAreaLimitedBox = styled.div<{ isFull?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: end;

  & div:last-child {
    color: ${(props) => (props.isFull ? props.theme.color.error : "gray")};
  }
`;

const TextAreaInner = styled.textarea`
  width: 100%;
  height: 10em;

  outline: none;
  border: none;

  font-size: 1.1rem;

  resize: none;
`;

export const TextArea = TextAreaInner;
