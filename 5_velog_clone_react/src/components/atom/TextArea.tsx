import { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface TextAreaProps {
  value: string;
  onChange(e: ChangeEvent<HTMLTextAreaElement>): void;
  placeholder?: string;
  limit?: number;
}

export function TextArea(props: TextAreaProps) {
  const { limit, onChange, value, ...rest } = props;

  const [isFull, setIsFull] = useState(false);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (limit !== undefined) {
      if (e.target.value.length >= limit) {
        setIsFull(true);
        return;
      } else {
        setIsFull(false);
      }
    }
    onChange(e);
  }

  return (
    <TextAreaInner
      {...rest}
      onChange={handleChange}
      value={value}
      isFull={isFull}
    />
  );
}

export const TextAreaInner = styled.textarea<{ isFull: boolean }>`
  width: 100%;
  height: 10em;

  color: ${(props) => (props.isFull ? props.theme.color.error : "inherit")};
`;
