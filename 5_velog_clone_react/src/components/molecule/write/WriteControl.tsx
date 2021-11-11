import styled from "styled-components";
import { Button } from "../../atom/Button";

interface WriteControlProps {
  onSubmit(): void;
}

export function WriteControl(props: WriteControlProps) {
  const { onSubmit } = props;

  return (
    <WriteControlBox>
      <div>
        <Button>나가기</Button>
      </div>
      <div>
        <Button>임시저장</Button>
        <Button onClick={onSubmit}>출간하기</Button>
      </div>
    </WriteControlBox>
  );
}

const WriteControlBox = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
  }
`;
