import { ChangeEvent } from "react";
import styled from "styled-components";
import { Article, ArticleChanger } from "../../../utils/article";
import { TagInput } from "../../atom/TagInput";
import { TextArea } from "../../atom/TextArea";
import { TitleInput } from "../../atom/TitleInput";
import { WriteControl } from "./WriteControl";

interface WriteArticleContentsProps {
  onNext(): void;
  article: Article;
  onChange: ArticleChanger;
}

export function WriteArticleContents(props: WriteArticleContentsProps) {
  const { onNext, article, onChange } = props;

  function handleChange(name: keyof Article) {
    return function (e: ChangeEvent<{ value: string }>) {
      const value = e.target.value;
      onChange(name, value);
    };
  }

  return (
    <WriteBox>
      <TitleInput value={article.title} onChange={handleChange("title")} />
      <TagInput
        tags={article.tags}
        onChange={(tags) => onChange("tags", tags)}
      />
      <TextArea value={article.content} onChange={handleChange("content")} />
      <WriteControl onSubmit={onNext} />
    </WriteBox>
  );
}

const WriteBox = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
`;
