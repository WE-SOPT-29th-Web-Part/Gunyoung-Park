import styled from "styled-components";
import { TagView } from "../atom/TagView";

export interface ViewArticleProps {
  title: string;
  content: string;
  author: string;
  tags: string[];
  thumbnail: string;
  timestamp: string;
}

export function ViewArticle(props: ViewArticleProps) {
  const { title, content, author, tags, thumbnail, timestamp } = props;

  return (
    <StyledViewArticle>
      <Title>{title}</Title>
      <Metadata>
        <Author>{author}</Author>
        <Timestamp>{timestamp}</Timestamp>
      </Metadata>
      <TagsContainer>
        <TagView tags={tags} />
      </TagsContainer>
      {thumbnail && <Thumbnail src={thumbnail} />}
      <Content>{content}</Content>
    </StyledViewArticle>
  );
}

const StyledViewArticle = styled.div``;

const Title = styled.h1``;

const Metadata = styled.div``;

const Author = styled.div``;
const Timestamp = styled.div``;
const TagsContainer = styled.div``;

const Content = styled.div``;

const Thumbnail = styled.img``;
