import { Card, CardContent } from "../ui/card";

export function timeAgo(date: string) {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();

  const minutes = Math.floor(diffMs / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hours ago`;
  return `${days} days ago`;
}
export default function BlogCard({ blog, onClick, isActive }: any) {
  return (
    <Card
      className={`cursor-pointer hover:shadow border-l-4 ${
        isActive ? "border-blue-500" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="text-xs text-blue-500 mb-1">
            {blog.category.join(", ")}
          </div>
        </div>

        <h3 className="font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-600">{blog.description}</p>

        <p className="text-xs text-gray-400 mt-2">
          {timeAgo(blog.date)}
        </p>
      </CardContent>
    </Card>
  );
}

