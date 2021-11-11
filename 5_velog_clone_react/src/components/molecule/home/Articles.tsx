import { useArticleSummaries } from "../../../utils/api/hook";
import { ArticlePreview } from "../../atom/ArticlePreview";

export function Articles() {
  const { data: articles, loading } = useArticleSummaries();

  if (loading) {
    return <Loading />;
  }

  if (articles.length === 0) {
    return <NoResult />;
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticlePreview article={article} />
      ))}
    </div>
  );
}

function NoResult() {
  return <div>게시글이 없습니다.</div>;
}

function Loading() {
  return <div>로딩중</div>;
}
