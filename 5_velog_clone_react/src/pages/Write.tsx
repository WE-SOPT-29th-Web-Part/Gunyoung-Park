import styled from "styled-components";
import { TextArea } from "../components/atom/TextArea";
import { TitleInput } from "../components/atom/TitleInput";
import { WriteControl } from "../components/molecule/write/WriteControl";
import { useWriteArticle } from "../utils/api/hook";
import { useInput } from "../utils/input";

export function Write() {
  const title = useInput("");
  const content = useInput("");

  const writer = useWriteArticle();

  async function writeArticle() {
    await writer.request({
      title: title.value,
      content: content.value,
      summary: "",
      tags: [],
    });
  }

  return (
    <WriteBox>
      <TitleInput {...title} />
      <TextArea {...content} />
      <WriteControl onSubmit={writeArticle} />
    </WriteBox>
  );
}

const WriteBox = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
`;
