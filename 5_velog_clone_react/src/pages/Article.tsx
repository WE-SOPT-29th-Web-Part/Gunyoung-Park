import { useParams } from "react-router-dom";
import { ArticleLayout } from "../components/layout/ArticleLayout";
import { TopBar } from "../components/molecule/common/TopBar";
import { ViewArticle } from "../components/organism/ViewArticle";
import { useArticleView } from "../utils/api/hook";

export function ArticlePage() {
  const params = useParams();
  const article = useArticleView(params.id ? params.id : "");

  return (
    <ArticleLayout
      topBar={<TopBar />}
      contents={article.data && <ViewArticle {...article.data} />}
    />
  );
}
