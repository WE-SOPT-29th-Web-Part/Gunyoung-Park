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
