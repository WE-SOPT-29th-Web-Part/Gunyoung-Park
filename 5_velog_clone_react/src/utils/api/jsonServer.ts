import axios, { AxiosInstance } from "axios";
import { parse, format } from "date-fns";
import { ApiService, Article } from "./types";

interface RawArticle {
  title: string;
  content: string;
  summary: string;
  author: string;
  tags: string[];
  timestamp: string;
}

export class JSONServerApiService implements ApiService {
  request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: "http://localhost:4002",
    });
  }

  async getArticles(): Promise<Article[]> {
    const res = await this.request.get<RawArticle[]>("articles");

    return articleConverter.toLocalFormat(res.data);
  }
  async createArticle(
    article: Omit<Article, "author" | "timestamp">
  ): Promise<void> {
    const raw = articleConverter.toServerFormatSingle({
      ...article,
      author: "Tekiter",
      timestamp: new Date(),
    });

    await this.request.post("articles", raw);
  }
}

const articleConverter = {
  strToDate(str: string) {
    return parse(str, "yyyy/MM/dd", new Date());
  },

  dateToStr(date: Date) {
    return format(date, "yyyy/MM/dd");
  },

  toServerFormatSingle(article: Article): RawArticle {
    const result: RawArticle = {
      ...article,
      timestamp: this.dateToStr(article.timestamp),
    };
    return result;
  },
  toLocalFormat(articles: RawArticle[] | RawArticle): Article[] {
    if (!Array.isArray(articles)) {
      return this.toLocalFormat([articles]);
    }

    const result: Article[] = articles.map((raw) => ({
      ...raw,
      timestamp: this.strToDate(raw.timestamp),
    }));
    return result;
  },
};
