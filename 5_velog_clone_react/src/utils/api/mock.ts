import { ApiService, Article } from "./types";

export class MockApiService implements ApiService {
  articles: Article[] = [];

  async getArticles(): Promise<Article[]> {
    return this.articles.map((article) => ({ ...article }));
  }

  async createArticle(article: Omit<Article, "author">): Promise<void> {
    this.articles.push({ ...article, author: "Tekiter" });
  }
}
