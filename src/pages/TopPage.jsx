import PostsList from "../components/posts/PostList";
import { useEffect, useState } from "react";

export default function TopPage() {
  const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
        if (!res.ok) throw new Error("データの取得に失敗しました。");
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("エラー詳細:", error);
				if (!navigator.onLine) {
					setError("インターネットに接続されていません。");
				} else {
					setError("一時的なエラーです。お手数ですが、しばらく待ってからページを再度更新してください。");
				}
      } finally {
				setIsLoading(false);
			}
    };
    fetcher();
  }, []);
	if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
	if (isLoading) return <p className="text-center mt-10">読み込み中...</p>;
  return (
    <>
		{posts.length === 0 ? (
      <p className="text-center mt-10">投稿された記事はまだありません。</p>
    ) : (
      <PostsList posts={posts} />
    )}
    </>
  );
}
