import { useParams } from "react-router-dom";
import { formatDate, sanitizeContent } from "../utils/utils";

export default function PostsPage({ posts }) {
  const { id } = useParams();
	const postId = parseInt(id);
	const post = posts.find(post => post.id === postId);
  return (
		<section className="max-w-[800px] w-10/12 mx-auto mt-10 space-y-6">
			<figure>
				<img src={post.thumbnailUrl} alt="" />
			</figure>
			<div className="flex justify-between items-start">
				<div>
					<time dateTime={post.createdAt} className="text-[0.8rem] text-[#888]">
						{formatDate(post.createdAt)}
					</time>
				</div>
				<div className="flex gap-2 flex-wrap justify-end">
					{post.categories.map(category => (
						<span key={category} className="border border-[#ccc] text-[#06c] rounded-sm px-2 py-1 text-[0.8rem]">
							{category}
						</span>
					))}
				</div>
			</div>
			<h1 className="text-[1.5rem] mt-2 text-gray-800">
				{`APIで取得した${post.title}`}
			</h1>
			<div className="text-[1rem] mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content) }}></div>
    </section>
  );
}
