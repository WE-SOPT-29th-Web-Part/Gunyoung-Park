import styled from "styled-components";
import { ArticleToWrite, ArticleChanger } from "../../../utils/article";
import { Button } from "../../atom/Button";
import { TextAreaLimited } from "../../atom/TextArea";

interface AdditionalArticleInfoProps {
  onCancel(): void;
  onSubmit(): void;
  article: ArticleToWrite;
  onChange: ArticleChanger;
}

export function AdditionalArticleInfo(props: AdditionalArticleInfoProps) {
  return (
    <InfoBox>
      <InfoBoxInner>
        <Title>포스트 미리보기</Title>
        <TextAreaLimited
          value={props.article.summary}
          onChange={(e) => props.onChange("summary", e.target.value)}
          placeholder="당신의 포스트를 짧게 소개해보세요."
          limit={150}
        />
        <ControlBox>
          <Button onClick={props.onCancel}>취소</Button>
          <Button variant="success" onClick={props.onSubmit}>
            출간하기
          </Button>
        </ControlBox>
      </InfoBoxInner>
    </InfoBox>
  );
}

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  background-color: #f8f9fa;
`;

const InfoBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;

  margin-bottom: 0.3em;
`;

const ControlBox = styled.div`
  display: flex;
  align-self: flex-end;

  & > *:not(:last-child) {
    margin-right: 0.5em;
  }
`;
