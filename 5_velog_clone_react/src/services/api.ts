export interface Article {
  title: string;
  content: string;
  summary: string;
  author: string;
  tags: string[];
}

export interface ApiService {
  getArticles(): Promise<Article[]>;
  createArticle(article: Omit<Article, "author">): Promise<void>;
}

export class MemoryApiService implements ApiService {
  articles: Article[] = [];

  async getArticles(): Promise<Article[]> {
    return this.articles.map((article) => ({ ...article }));
  }

  async createArticle(article: Omit<Article, "author">): Promise<void> {
    this.articles.push({ ...article, author: "Tekiter" });
  }
}
