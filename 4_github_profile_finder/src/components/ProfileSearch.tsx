import { useState } from "react";
import styled from "styled-components";
import { GlassCard } from "./GlassCard";
import { SearchBar } from "./SearchBar";

interface ProfileSearchProps {
  onSearch(val: string): void;
}

export function ProfileSearch(props: ProfileSearchProps) {
  const { onSearch } = props;

  const [localValue, setLocalValue] = useState("");

  function onSearchContentChange(val: string) {
    setLocalValue(val);
  }

  function onSearchSubmit(val: string) {
    onSearch(val);
  }

  return (
    <GlassCard>
      <Header>Github Profile Finder</Header>
      <SearchBarHolder>
        <SearchBar
          placeHolder="Github Username..."
          value={localValue}
          onChange={onSearchContentChange}
          onSubmit={onSearchSubmit}
        />
      </SearchBarHolder>
    </GlassCard>
  );
}

const Header = styled.h1`
  padding: 0.3em 2em;

  text-align: center;
  display: block;
  font-weight: 500;
`;

const SearchBarHolder = styled.div`
  width: 15em;
  margin: 0 auto;

  padding-bottom: 0.9em;
`;
