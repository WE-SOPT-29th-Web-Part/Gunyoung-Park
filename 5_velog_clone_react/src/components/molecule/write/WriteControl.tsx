import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router";
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
        <Button variant="transparent" onClick={() => navigate("/")}>
          <MdArrowBack />
          나가기
        </Button>
      </div>
      <div>
        <Button>임시저장</Button>
        <Button variant="success" onClick={onSubmit}>
          출간하기
        </Button>
      </div>
    </WriteControlBox>
  );
}

const WriteControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  height: 4rem;

  padding: 0 0.7rem;

  & > div {
    display: flex;
  }

  & > div > *:not(:last-child) {
    margin-right: 0.5em;
  }
`;
