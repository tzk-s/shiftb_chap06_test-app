import { posts } from "../data/post";
import PostsList from "../components/PostList";

export default function TopPage() {
  return (
    <>
      <PostsList posts={posts} />
    </>
  );
}
