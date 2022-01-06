import { useState } from "react";

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  author: string;
  timestamp: string;
  thumbnail: string;
}

export type ArticleToWrite = Omit<Article, "author" | "timestamp" | "id">;

export interface ArticleChanger {
  <K extends keyof ArticleToWrite>(name: K, val: ArticleToWrite[K]): void;
}

export function useArticle() {
  const [value, setValue] = useState<ArticleToWrite>({
    title: "",
    summary: "",
    content: "",
    tags: [],
    thumbnail: "",
  });

  function updateField<K extends keyof ArticleToWrite>(
    name: K,
    val: ArticleToWrite[K]
  ) {
    setValue({ ...value, [name]: val });
  }

  return {
    value,
    setValue,
    updateField,
  };
}
