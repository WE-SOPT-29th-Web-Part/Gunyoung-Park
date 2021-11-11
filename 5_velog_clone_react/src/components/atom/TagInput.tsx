import { KeyboardEvent } from "react";
import styled from "styled-components";
import { useInput } from "../../utils/input";

interface TagInputProps {
  tags: string[];
  onChange(tags: string[]): void;
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
      <TagInputInner onKeyPress={handleInnerKey} {...tag} />
    </TagInputBox>
  );
}

const TagInputBox = styled.div`
  display: flex;
`;

const TagInputInner = styled.input`
  display: block;
  flex-grow: 1;
`;

const TagInputButton = styled.button``;
