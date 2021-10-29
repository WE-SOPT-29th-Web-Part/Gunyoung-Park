import styled from "styled-components";
import { GlassCard } from "./GlassCard";
import { SearchBar } from "./SearchBar";

export function ProfileSearch() {
  return (
    <GlassCard>
      <Header>Github Profile Finder</Header>
      <SearchBarHolder>
        <SearchBar placeHolder="Github Username..." />
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
