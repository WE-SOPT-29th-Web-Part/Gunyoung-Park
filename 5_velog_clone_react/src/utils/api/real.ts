import axios, { AxiosInstance } from "axios";
import { ApiService, Article, ImageUploadResponse } from "./types";

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
      id: item.id,
      title: item.title,
      summary: item.summary,
      timestamp: item.date,
      author: "Tekiter",
      content: item.body,
      tags: item.tags,
      thumbnail: item.thumbnail,
    }));
  }

  async getArticle(articleId: string): Promise<Article> {
    interface ServerArticle {
      id: string;
      title: string;
      body: string;
      summary: string;
      thumbnail: string;
      tags: string[];
      date: string;
    }

    const res = await this.request.get<ServerArticle>(`article/${articleId}`);

    const item = res.data;

    return {
      id: item.id,
      title: item.title,
      summary: item.summary,
      timestamp: item.date,
      author: "Tekiter",
      content: item.body,
      tags: item.tags,
      thumbnail: item.thumbnail,
    };
  }

  async deleteArticle(articleId: string): Promise<void> {
    await this.request.delete(`article/${articleId}`);
  }

  async modifyArticle(
    articleId: string,
    article: Omit<Article, "author" | "timestamp">
  ): Promise<void> {
    interface ServerRequest {
      title: string;
      body: string;
      summary: string;
      thumbnail: string;
      tags: string[];
    }

    await this.request.patch<ServerRequest>(`article/${articleId}`);
  }

  async createArticle(
    article: Omit<Article, "author" | "timestamp" | "id">
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

  async uploadImage(file: File): Promise<ImageUploadResponse> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await this.request.post("image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  }
}
