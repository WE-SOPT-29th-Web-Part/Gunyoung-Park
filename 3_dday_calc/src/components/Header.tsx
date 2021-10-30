import styled from "styled-components";

const HeaderBox = styled.div`
  padding: 0.3em 0;

  text-align: center;

  margin-bottom: 1.3em;

  & h1 {
    margin: 0;
    font-weight: 500;
  }
`;

export function Header() {
  return (
    <HeaderBox>
      <h1>D-day Calc.</h1>
    </HeaderBox>
  );
}
