import { useState } from "react";

export interface Article {
  title: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface ArticleChanger {
  <K extends keyof Article>(name: K, val: Article[K]): void;
}

export function useArticle() {
  const [value, setValue] = useState<Article>({
    title: "",
    summary: "",
    content: "",
    tags: [],
  });

  function updateField<K extends keyof Article>(name: K, val: Article[K]) {
    setValue({ ...value, [name]: val });
  }

  return {
    value,
    setValue,
    updateField,
  };
}
