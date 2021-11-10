import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavProps {
  items: {
    label: string;
    to: string;
  }[];
}

export function Nav(props: NavProps) {
  return (
    <NavBox>
      {props.items.map((item, idx) => (
        <NavItem to={item.to} key={idx}>
          {item.label}
        </NavItem>
      ))}
    </NavBox>
  );
}

const NavBox = styled.nav`
  display: flex;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.color.primary};

  font-size: 1.25em;
  width: 8rem;
  height: 3rem;
  transition: color 0.3s;
`;
