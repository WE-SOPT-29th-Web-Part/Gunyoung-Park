import { useState } from "react";

export interface Article {
  title: string;
  summary: string;
  content: string;
  tags: string[];
  author: string;
}

export type ArticleToWrite = Omit<Article, "author">;

export interface ArticleChanger {
  <K extends keyof ArticleToWrite>(name: K, val: ArticleToWrite[K]): void;
}

export function useArticle() {
  const [value, setValue] = useState<ArticleToWrite>({
    title: "",
    summary: "",
    content: "",
    tags: [],
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
