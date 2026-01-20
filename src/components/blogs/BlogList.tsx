import { useBlogs } from "../../hooks/useBlogs";
import Spinner from "../ui/Spinner";
import BlogCard from "./BlogCard";

export default function BlogList({
  onSelect,
  selectedId,
}: {
  onSelect: (id: number) => void;
  selectedId: number | null;
}) {
  const { data, isLoading, error } = useBlogs();

  if (isLoading) return <div><Spinner /></div>
  if (error) return <p className="p-4 text-red-500">Error loading blogs</p>;

  return (
    <div className="col-span-1 border-r p-4 space-y-4 overflow-y-auto">
      {data.map((b: any) => (
        <BlogCard
          key={b.id}
          blog={b}
          isActive={Number(b.id) === selectedId}
          onClick={() => onSelect(Number(b.id))}
        />
      ))}
    </div>
  );
}

