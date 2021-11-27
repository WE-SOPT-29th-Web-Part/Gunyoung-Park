import axios, { AxiosInstance } from "axios";
import { ApiService, Article } from "./types";

export class RealApiService implements ApiService {
  private request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: "http://localhost:5005/api",
    });
  }

  async getArticles(): Promise<Article[]> {
    interface ServerArticle {
      id: string;
      title: string;
      body: string;
      summary: string;
      thumbnail: string;
      tags: string[];
      date: string;
    }

    const res = await this.request.get<ServerArticle[]>("article");

    return res.data.map((item) => ({
      title: item.title,
      summary: item.summary,
      timestamp: item.date,
      author: "Tekiter",
      content: item.body,
      tags: item.tags,
      thumbnail: item.thumbnail,
    }));
  }

  async createArticle(
    article: Omit<Article, "author" | "timestamp">
  ): Promise<void> {
    interface ServerRequest {
      title: string;
      body: string;
      summary: string;
      thumbnail: string;
      tags: string[];
    }

    const requestData: ServerRequest = {
      title: article.title,
      body: article.content,
      summary: article.summary,
      tags: article.tags,
      thumbnail: article.thumbnail,
    };

    await this.request.post("article", requestData);
  }
}
