import { useEffect, useState } from "react";
import styled from "styled-components";
import { bottomLine, glassBackground } from "../styles/glass";
import {
  deleteSearchHistory,
  getSearchHistory,
  pushSearchHistory,
} from "../utils/history";
import { GlassCard } from "./GlassCard";
import { SearchBar } from "./SearchBar";

interface ProfileSearchProps {
  onSearch(val: string): void;
}

export function ProfileSearch(props: ProfileSearchProps) {
  const { onSearch } = props;

  const [localValue, setLocalValue] = useState("");

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const data = getSearchHistory();
    setHistory(data);
  }, []);

  function onSearchContentChange(val: string) {
    setLocalValue(val);
  }

  function onSearchSubmit(val: string) {
    onSearch(val);
    const newHistory = pushSearchHistory(val);
    setHistory(newHistory);
    setIsHistoryOpen(false);
  }

  function onSelectDropdown(item: { value: string }) {
    onSearchContentChange(item.value);
    onSearchSubmit(item.value);
  }

  function onDeleteHistory(item: { value: string }) {
    const newHistory = deleteSearchHistory(item.value);
    setHistory(newHistory);
  }

  return (
    <GlassCard style={{ zIndex: 999 }}>
      <Header>Github Profile Finder</Header>
      <SearchBarHolder>
        <SearchBar
          placeHolder="Github Username..."
          value={localValue}
          onChange={onSearchContentChange}
          onSubmit={onSearchSubmit}
          onFocus={() => setIsHistoryOpen(true)}
        />

        <Dropdown
          items={history.map((item) => ({ name: item, value: item }))}
          onSelect={onSelectDropdown}
          isOpen={isHistoryOpen}
          onClose={() => setIsHistoryOpen(false)}
          onDelete={onDeleteHistory}
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

  margin-bottom: 0.9em;
  position: relative;
`;

interface DropdownProps {
  items: DropdownItemData[];
  isOpen: boolean;
  onSelect(item: DropdownItemData): void;
  onClose(): void;
  onDelete(item: DropdownItemData): void;
}

interface DropdownItemData {
  name: string;
  value: string;
}

function Dropdown(props: DropdownProps) {
  const { items, onSelect, isOpen, onClose, onDelete } = props;

  function onItemClick(value: DropdownItemData) {
    return function () {
      onSelect(value);
      onClose();
    };
  }

  function onItemDelete(value: DropdownItemData) {
    return function () {
      onDelete(value);
    };
  }

  return (
    <DropdownBox isOpen={isOpen}>
      {items.map((item) => (
        <DropdownItemBox key={item.value}>
          <DropdownItemContent onClick={onItemClick(item)}>
            {item.name}
          </DropdownItemContent>
          <DropdownItemDelete onClick={onItemDelete(item)}>
            X
          </DropdownItemDelete>
        </DropdownItemBox>
      ))}
    </DropdownBox>
  );
}

const DropdownBox = styled.div<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? "visible" : "collapse")};

  position: absolute;
  z-index: 999;
  right: 0;
  top: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${glassBackground}
  border-radius: 0;
`;

const DropdownItemBox = styled.div`
  display: flex;
`;

const DropdownItemContent = styled.button`
  flex-grow: 1;

  background-color: transparent;
  cursor: pointer;
  border: none;
  color: inherit;
  text-align: left;
  display: block;
  padding: 0.7em 0.8em;
  font-size: 1.1em;

  &:not(:last-child) {
    ${bottomLine}
  }
`;

const DropdownItemDelete = styled.button`
  color: inherit;
  background-color: rgb(255, 255, 255, 0.05);
  cursor: pointer;
  border: none;
  color: inherit;
  text-align: left;
  display: block;
  padding: 0.7em 0.8em;
  font-size: 0.9em;
`;
