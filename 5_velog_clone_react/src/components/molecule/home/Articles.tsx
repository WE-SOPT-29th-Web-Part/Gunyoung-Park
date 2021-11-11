import { useArticleSummaries } from "../../../utils/api/hook";
import { ArticlePreview } from "../../atom/ArticlePreview";

export function Articles() {
  const { data: articles } = useArticleSummaries();

  return (
    <div>
      {articles.map((article) => (
        <ArticlePreview article={article} />
      ))}
    </div>
  );
}
