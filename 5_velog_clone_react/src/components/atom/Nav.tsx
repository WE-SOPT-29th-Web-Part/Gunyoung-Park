import { useEffect, useState } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import styled from "styled-components";

interface NavProps {
  items: {
    label: string;
    to: string;
  }[];
}

export function Nav(props: NavProps) {
  const location = useLocation();
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    props.items.forEach((item, idx) => {
      if (matchPath(item.to, location.pathname)) {
        setSelected(idx);
      }
    });
  }, [location, props.items]);

  return (
    <NavBox>
      <NavInner>
        {props.items.map((item, idx) => (
          <NavItem to={item.to} key={idx} $isActive={selected === idx}>
            {item.label}
          </NavItem>
        ))}
      </NavInner>
      <NavUnderline position={selected} />
    </NavBox>
  );
}

const NavInner = styled.nav`
  display: flex;
`;

const NavBox = styled.div``;

const NavItem = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.$isActive ? props.theme.color.primary : "black")};

  font-size: 1.25em;
  width: 128px;
  height: 3rem;
  transition: color 0.3s;
`;

const NavUnderline = styled.div<{ position: number }>`
  height: 2px;
  background-color: ${(props) => props.theme.color.primary};

  width: 128px;

  transition: transform 0.3s;
  transform: translateX(${(props) => props.position * 128}px);
`;
