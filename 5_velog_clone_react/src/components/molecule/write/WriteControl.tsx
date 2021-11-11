import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { Button } from "../../atom/Button";

interface WriteControlProps {
  onSubmit(): void;
}

export function WriteControl(props: WriteControlProps) {
  const { onSubmit } = props;

  const navigate = useNavigate();

  return (
    <WriteControlBox>
      <div>
        <Button onClick={() => navigate("/")}>나가기</Button>
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
