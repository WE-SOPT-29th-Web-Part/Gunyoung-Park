import { useEffect, useState } from "react";
import { Article } from "../article";
import { MockApiService } from "./mock";
import { ApiService } from "./types";

const api: ApiService = new MockApiService();

interface ArticleData {
  title: string;
  content: string;
  summary: string;
  tags: string[];
}

export function useWriteArticle() {
  async function request(data: ArticleData) {
    await api.createArticle({ ...data });
  }

  return {
    request,
  };
}

export function useArticleSummaries() {
  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await api.getArticles();
      setData(data);
      setLoading(false);
    })();
  }, []);

  return { data, loading };
}
