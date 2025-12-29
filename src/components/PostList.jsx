import { formatContent, formatDate } from '../utils/utils';

export default function PostsList({ posts }) {
  return (
    <ul className="max-w-[800px] w-10/12 mx-auto mt-10 space-y-6">
      {posts.map(post => (
        <li key={post.id} className="text-left text-black border border-gray-200 block p-5 hover:shadow-md transition duration-300 cursor-pointer">
          <a href={post.thumbnailUrl}>
            <div className="flex justify-between items-start">
              <div>
                <time dateTime={post.createdAt} className="text-[0.8rem] text-[#888]">
                  {formatDate(post.createdAt)}
                </time>
              </div>
              <div className="flex gap-2 flex-wrap justify-end">
                {post.categories.map(category => (
                  <span key={category} className="border border-[#06c] text-[#06c] rounded-sm px-1.5 py-0.5 text-[0.8rem]">
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-[1.5rem] mt-2 text-gray-800">
              {`APIで取得した${post.title}`}
            </h2>
            <p className="text-[1rem] mt-2 text-gray-600 line-clamp-3" dangerouslySetInnerHTML={formatContent(post.content)}></p>
          </a>
        </li>
      ))}
    </ul>
  );
}
