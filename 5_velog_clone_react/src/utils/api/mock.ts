import { format } from "date-fns";
import { ApiService, Article } from "./types";

export class MockApiService implements ApiService {
  articles: Article[] = [];

  async getArticles(): Promise<Article[]> {
    await sleep(345);
    return this.articles.map((article) => ({ ...article }));
  }

  async createArticle(
    article: Omit<Article, "author" | "timestamp">
  ): Promise<void> {
    await sleep(789);

    this.articles.push({
      ...article,
      author: "Tekiter",
      timestamp: format(new Date(), "yyyy년 MM월 dd일"),
    });
    console.log("Articles: ", this.articles);
  }
}

function sleep(delta: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delta);
  });
}
