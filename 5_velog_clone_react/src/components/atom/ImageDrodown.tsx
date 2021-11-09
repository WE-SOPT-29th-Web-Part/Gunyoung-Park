import { MdArrowDropDown } from "react-icons/md";
import styled from "styled-components";

interface DropdownButtonProps {
  imageSrc: string;
}

export function ImageDropdown(props: DropdownButtonProps) {
  return (
    <DropdownButtonInner>
      <img src={props.imageSrc} alt="profile" />
      <span>
        <MdArrowDropDown />
      </span>
    </DropdownButtonInner>
  );
}

const DropdownButtonInner = styled.button`
  display: flex;
  align-items: center;
  height: 2.5em;
  background-color: transparent;
  font-size: 1em;
  border: none;
  border-radius: 50%;

  color: gray;

  transition: all 0.125s ease-in 0s;

  & > img {
    height: 100%;
  }

  &:hover {
    color: black;
  }
`;
