import Header from "../components/layout/Header";
import PostList from "../components/PostList";
import {posts} from "../data/post"

export default function TopPage() {
  return (
    <>
			<Header />
      <PostList posts={posts} />
    </>
  );
}
