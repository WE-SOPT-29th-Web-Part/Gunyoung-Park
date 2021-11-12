import { KeyboardEvent } from "react";
import styled from "styled-components";
import { useInput } from "../../utils/input";

interface TagInputProps {
  tags: string[];
  onChange(tags: string[]): void;
  placeholder: string;
}

export function TagInput(props: TagInputProps) {
  const tag = useInput("");

  function removeTag(idx: number) {
    const newTags = [...props.tags];
    newTags.splice(idx, 1);
    props.onChange(newTags);
  }

  function handleInnerKey(e: KeyboardEvent<HTMLInputElement>) {
    if (
      e.key === "Enter" &&
      tag.value !== "" &&
      !props.tags.includes(tag.value)
    ) {
      props.onChange([...props.tags, tag.value]);
      tag.setValue("");
    }
  }

  return (
    <TagInputBox>
      {props.tags.map((tag, idx) => (
        <TagInputButton key={idx} onClick={() => removeTag(idx)}>
          {tag}
        </TagInputButton>
      ))}
      <TagInputInner
        onKeyPress={handleInnerKey}
        {...tag}
        placeholder={props.placeholder}
      />
    </TagInputBox>
  );
}

const TagInputBox = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;

  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const TagInputInner = styled.input`
  display: block;
  flex-grow: 1;

  font-size: inherit;

  outline: none;
  border: none;
`;

const TagInputButton = styled.button`
  font-size: 1rem;

  margin-right: 0.2em;
  padding-left: 1em;
  padding-right: 1em;
  height: 2em;

  border: none;
  border-radius: 1rem;

  background-color: #f1f3f5;
  color: #0ca678;

  cursor: pointer;
`;
