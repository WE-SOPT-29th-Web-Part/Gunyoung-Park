export interface Article {
  title: string;
  content: string;
  summary: string;
  author: string;
  tags: string[];
  timestamp: Date;
}

export interface ApiService {
  getArticles(): Promise<Article[]>;
  createArticle(article: Omit<Article, "author" | "timestamp">): Promise<void>;
}
