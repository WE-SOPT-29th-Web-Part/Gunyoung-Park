export interface Article {
  id: string;
  title: string;
  content: string;
  summary: string;
  author: string;
  tags: string[];
  thumbnail: string;
  timestamp: string;
}

export interface ImageUploadResponse {
  url: string;
}

export interface ApiService {
  getArticles(): Promise<Article[]>;
  getArticle(articleId: string): Promise<Article>;
  createArticle(
    article: Omit<Article, "author" | "timestamp" | "id">
  ): Promise<void>;
  deleteArticle(articleId: string): Promise<void>;
  modifyArticle(
    articleId: string,
    article: Omit<Article, "author" | "timestamp">
  ): Promise<void>;
  uploadImage(file: File): Promise<ImageUploadResponse>;
}
