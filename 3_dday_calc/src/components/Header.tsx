import styled from "styled-components";

const HeaderBox = styled.div`
  padding: 0.3em 0;

  text-align: center;

  & h1 {
    margin: 0;
  }
`;

export function Header() {
  return (
    <HeaderBox>
      <h1>D-day 계산기</h1>
    </HeaderBox>
  );
}
