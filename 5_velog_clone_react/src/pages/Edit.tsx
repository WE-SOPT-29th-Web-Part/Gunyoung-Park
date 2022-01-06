import { useParams } from "react-router-dom";
import { EditArticle } from "../components/organism/EditArticle";

export function EditPage() {
  const params = useParams();

  return <EditArticle articleId={params.id + ""} />;
}
