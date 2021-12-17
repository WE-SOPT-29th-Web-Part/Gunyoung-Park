import { Link } from "react-router-dom";
import styled from "styled-components";
import { Article } from "../../utils/article";
import { TagView } from "./TagView";

interface ArticlePreviewProps {
  article: Article;
}

export function ArticlePreview(props: ArticlePreviewProps) {
  const { article } = props;

  return (
    <ArticlePreviewBox>
      <LinkArea to={`/article/${article.id}`}>
        <Title>{article.title}</Title>
        <Summary>{article.summary}</Summary>
        <TagView tags={article.tags} />
        <DatePresent>{article.timestamp}</DatePresent>
      </LinkArea>
    </ArticlePreviewBox>
  );
}

const ArticlePreviewBox = styled.div`
  padding: 2em 0;

  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

const LinkArea = styled(Link)`
  display: block;

  color: inherit;
  text-decoration: inherit;
`;

const Title = styled.h2`
  margin-bottom: 0.3em;
`;

const Summary = styled.p`
  margin-bottom: 1em;
`;

const DatePresent = styled.p`
  margin-top: 0.7em;
  color: gray;
`;
