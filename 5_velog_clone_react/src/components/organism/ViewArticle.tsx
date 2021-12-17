import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../../utils/api/hook";
import { TagView } from "../atom/TagView";

export interface ViewArticleProps {
  title: string;
  content: string;
  author: string;
  tags: string[];
  thumbnail: string;
  timestamp: string;
  id: string;
}

export function ViewArticle(props: ViewArticleProps) {
  const { title, content, author, tags, thumbnail, timestamp, id } = props;

  return (
    <StyledViewArticle>
      <Title>{title}</Title>
      <Metadata>
        <Author>{author}</Author>
        <Timestamp>{timestamp}</Timestamp>
      </Metadata>
      <Controls articleId={id} />
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

interface ControlsProps {
  articleId: string;
}

function Controls(props: ControlsProps) {
  const navigate = useNavigate();

  function editArticle() {
    navigate(`/edit/${props.articleId}`);
  }

  async function deleteArticle() {
    await api.deleteArticle(props.articleId);
    navigate(`/`);
  }

  return (
    <div>
      <ControlButton onClick={editArticle}>수정</ControlButton>
      <ControlButton onClick={deleteArticle}>삭제</ControlButton>
    </div>
  );
}

const ControlButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 1em 1em;

  color: gray;

  &:hover {
    color: black;
  }
`;
