import styled from "styled-components";

export function SubHeader() {
  return (
    <SubHeaderBox>
      <span>기준으로</span>
    </SubHeaderBox>
  );
}

const SubHeaderBox = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 0.5em;

  & span {
    padding-right: 0em;
  }
`;
