import styled from "styled-components";
import { Article } from "../../utils/article";

interface ArticlePreviewProps {
  article: Article;
}

export function ArticlePreview(props: ArticlePreviewProps) {
  const { article } = props;

  return (
    <ArticlePreviewBox>
      <h2>{article.title}</h2>
      {JSON.stringify(article)}
    </ArticlePreviewBox>
  );
}

const ArticlePreviewBox = styled.div`
  h2 {
  }
`;
