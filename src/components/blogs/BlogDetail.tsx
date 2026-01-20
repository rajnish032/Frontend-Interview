import { useBlog } from "../../hooks/useBlogs";
import Spinner from "../ui/Spinner";
import { timeAgo } from "./BlogCard";

export default function BlogDetail({ id }: { id: number | null }) {
  const { data, isLoading } = useBlog(id);
   if (!id || isLoading) return <Spinner />; 
  return (
    <div className="col-span-2 p-6 overflow-y-auto">
      <img
        src={data.coverImage}
        className="w-full h-64 object-cover rounded"
      />

      <h1 className="text-2xl font-bold mt-4">{data.title}</h1>

      <p className="text-sm text-gray-500 mt-1">
        Posted {timeAgo(data.date)}
      </p>

      <p className="mt-3 whitespace-pre-line">{data.content}</p>
    </div>
  );
}
