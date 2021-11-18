const HISTORY_KEY = "SEARCH-HISTORY";

export function getSearchHistory(): string[] {
  const raw = localStorage.getItem(HISTORY_KEY);

  if (!raw) {
    return [];
  }

  const data = JSON.parse(raw) as string[];
  return data;
}

export function pushSearchHistory(value: string): string[] {
  const current = getSearchHistory();

  if (current.includes(value)) {
    current.splice(current.indexOf(value), 1);
  }

  const newHistory = [value, ...current].slice(0, 3);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));

  return newHistory;
}

export function deleteSearchHistory(value: string): string[] {
  const current = getSearchHistory();

  if (current.includes(value)) {
    current.splice(current.indexOf(value), 1);
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(current));

  return current;
}
