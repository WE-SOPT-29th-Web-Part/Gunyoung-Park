import { useEffect, useState } from "react";
import { Article } from "../article";
import { getAPI } from "./factory";
import { ApiService } from "./types";

const api: ApiService = getAPI();

interface ArticleData {
  title: string;
  content: string;
  summary: string;
  tags: string[];
  thumbnail: string;
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

export function useArticleView(articleId: string) {
  const [data, setData] = useState<Article>();

  useEffect(() => {
    (async () => {
      const data = await api.getArticle(articleId);
      setData(data);
    })();
  }, [articleId]);

  return { data };
}

export function useUploadImage() {
  async function request(file: File) {
    const res = await api.uploadImage(file);
    return res.url;
  }

  return { request };
}
