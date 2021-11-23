import { ReactNode } from "react";
import styled from "styled-components";

interface NavBarProps {
  left?: ReactNode;
  right?: ReactNode;
}

export function NavBar(props: NavBarProps) {
  return (
    <NavBarBox>
      <NavBarInner>{props.left}</NavBarInner>
      <NavBarInner>{props.right}</NavBarInner>
    </NavBarBox>
  );
}

const NavBarBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4rem;
`;

const NavBarInner = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 0.7em;
  }
`;
