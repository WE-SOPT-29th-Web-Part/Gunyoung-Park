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
      <TextAreaLimited
        value={props.article.summary}
        onChange={(e) => props.onChange("summary", e.target.value)}
        placeholder="당신의 포스트를 짧게 소개해보세요."
        limit={150}
      />
      <ControlBox>
        <Button onClick={props.onCancel}>취소</Button>
        <Button onClick={props.onSubmit}>출간하기</Button>
      </ControlBox>
    </InfoBox>
  );
}

const InfoBox = styled.div`
  height: 100%;
  width: 100%;

  background-color: white;
`;

const ControlBox = styled.div`
  display: flex;
`;
