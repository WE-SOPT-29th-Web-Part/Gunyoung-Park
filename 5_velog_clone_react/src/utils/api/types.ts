export interface Article {
  title: string;
  content: string;
  summary: string;
  author: string;
  tags: string[];
  thumbnail: string;
  timestamp: string;
}

export interface ApiService {
  getArticles(): Promise<Article[]>;
  createArticle(article: Omit<Article, "author" | "timestamp">): Promise<void>;
}
