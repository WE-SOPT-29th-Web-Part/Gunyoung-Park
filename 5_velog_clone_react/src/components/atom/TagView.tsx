import styled from "styled-components";

interface TagViewProps {
  tags: string[];
}

export function TagView(props: TagViewProps) {
  return (
    <TagViewBox>
      {props.tags.map((tag) => (
        <TagButton key={tag}>{tag}</TagButton>
      ))}
    </TagViewBox>
  );
}

const TagViewBox = styled.div`
  display: flex;
  align-items: center;
`;

const TagButton = styled.button`
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
