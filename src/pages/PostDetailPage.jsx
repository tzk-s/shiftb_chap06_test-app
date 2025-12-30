import { useParams } from "react-router-dom";
import PostDetail from "../components/posts/PostDetail";
import { useEffect, useState } from "react";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      try {
        if (!id) return;
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
        if (!res.ok) {
          if (res.status === 404) throw new Error("404");
          throw new Error("データの取得に失敗しました。");
        }
        const data = await res.json();
        setPost(data.post);
      } catch (error) {
        console.error("エラー詳細:", error);
        if (error.message === "404") {
          setError("お探しの記事は見つかりませんでした。");
        } else if (!navigator.onLine) {
          setError("インターネットに接続されていません。");
        } else {
          setError("一時的なエラーです。お手数ですが、しばらく待ってからページを再度更新してください。");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetcher();
  }, [id]);
  if (isLoading) return <p className="text-center mt-10">読み込み中...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!post) return <p className="text-center mt-10">記事が見つかりません。</p>;
  return (
    <>
      <PostDetail post={post} />
    </>
  );
}
