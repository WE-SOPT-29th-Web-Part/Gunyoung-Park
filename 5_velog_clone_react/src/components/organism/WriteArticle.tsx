import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useWriteArticle } from "../../utils/api/hook";
import { useArticle } from "../../utils/article";
import { AdditionalArticleInfo } from "../molecule/write/AdditionalArticleInfo";
import { WriteArticleContents } from "../molecule/write/WriteArticleContents";

export function WriteArticle() {
  const [isAddiInfo, setIsAddiInfo] = useState(false);

  const article = useArticle();
  const writer = useWriteArticle();
  const navigate = useNavigate();

  async function writeArticle() {
    await writer.request({ ...article.value });
    navigate("/");
  }

  function openAddi() {
    setIsAddiInfo(true);
  }

  function closeAddi() {
    setIsAddiInfo(false);
  }

  return (
    <WriteArticleBox isOverlay={isAddiInfo}>
      <WriteArticleContents
        onNext={openAddi}
        article={article.value}
        onChange={(name, val) => article.updateField(name, val)}
      />
      <div>
        <AdditionalArticleInfo
          onCancel={closeAddi}
          onSubmit={writeArticle}
          article={article.value}
          onChange={(name, val) => article.updateField(name, val)}
        />
      </div>
    </WriteArticleBox>
  );
}

const WriteArticleBox = styled.div<{ isOverlay: boolean }>`
  height: 100vh;
  width: 100vw;

  overflow-y: hidden;

  & > *:last-child {
    position: fixed;
    top: 0;
    transform: translateY(${(props) => (props.isOverlay ? "0" : "100vh")});

    transition: transform 0.3s;
    width: 100vw;
    height: 100vh;
  }
`;
