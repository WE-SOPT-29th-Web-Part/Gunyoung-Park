import styled from "styled-components";

export function Header() {
  return (
    <HeaderBox>
      <h1>Todo List</h1>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  background-color: grey;
  color: white;
  text-align: center;

  padding: 0.5em 0;
`;
