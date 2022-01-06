import { useRef } from "react";
import styled from "styled-components";
import { useUploadImage } from "../../../utils/api/hook";
import { ArticleToWrite, ArticleChanger } from "../../../utils/article";
import { Button } from "../../atom/Button";
import { Image } from "../../atom/Image";
import { TextAreaLimited } from "../../atom/TextArea";

interface AdditionalArticleInfoProps {
  onCancel(): void;
  onSubmit(): void;
  article: ArticleToWrite;
  onChange: ArticleChanger;
}

export function AdditionalArticleInfo(props: AdditionalArticleInfoProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadImage = useUploadImage();

  async function handleFileSelect() {
    const selectedFiles = fileInputRef.current!.files;

    if (selectedFiles?.length && selectedFiles.length > 0) {
      const selected = selectedFiles[0] as File;

      const url = await uploadImage.request(selected);
      props.onChange("thumbnail", url);
    }
  }

  return (
    <InfoBox>
      <InfoBoxInner>
        <Title>포스트 미리보기</Title>
        <input type="file" ref={fileInputRef} onChange={handleFileSelect} />
        <Image src={props.article.thumbnail} />
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

  & > *:not(:last-child) {
    margin-bottom: 0.7em;
  }
`;

const Title = styled.h2`
  font-size: 1.3rem;
`;

const ControlBox = styled.div`
  display: flex;
  align-self: flex-end;

  & > *:not(:last-child) {
    margin-right: 0.5em;
  }
`;
