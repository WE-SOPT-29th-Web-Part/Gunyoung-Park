import { ChangeEvent } from "react";
import styled from "styled-components";
import { ArticleToWrite, ArticleChanger } from "../../../utils/article";
import { TagInput } from "../../atom/TagInput";
import { TextArea } from "../../atom/TextArea";
import { TitleInput } from "../../atom/TitleInput";
import { WriteControl } from "./WriteControl";

interface WriteArticleContentsProps {
  onNext(): void;
  article: ArticleToWrite;
  onChange: ArticleChanger;
}

export function WriteArticleContents(props: WriteArticleContentsProps) {
  const { onNext, article, onChange } = props;

  function handleChange(name: keyof ArticleToWrite) {
    return function (e: ChangeEvent<{ value: string }>) {
      const value = e.target.value;
      onChange(name, value);
    };
  }

  return (
    <WriteBox>
      <WriteContentBox>
        <TitleInput
          value={article.title}
          onChange={handleChange("title")}
          placeholder="제목을 입력하세요"
        />
        <Bar />
        <TagInput
          tags={article.tags}
          onChange={(tags) => onChange("tags", tags)}
          placeholder="태그를 입력하세요"
        />
        <TextArea
          value={article.content}
          onChange={handleChange("content")}
          placeholder="당신의 이야기를 적어보세요..."
        />
      </WriteContentBox>
      <WriteControl onSubmit={onNext} />
    </WriteBox>
  );
}

const WriteBox = styled.div`
  background-color: white;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const WriteContentBox = styled.div`
  padding: 2.5em 2.5em;
  flex-grow: 1;
`;

const Bar = styled.div`
  background-color: black;
  width: 4rem;
  height: 6px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;
