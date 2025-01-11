import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black truncate" title={title}>
          {title}
        </h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
          User ID: {userId}
        </span>
      </div>
      <p className="text-gray-700 text-sm line-clamp-3">{content}</p>
      <div className="mt-4">
        <button
          className="text-sm font-medium text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={() => alert("View More clicked!")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default PostCard;
