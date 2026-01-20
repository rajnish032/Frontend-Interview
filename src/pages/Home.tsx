import { useEffect, useState } from "react";
import BlogList from "../components/blogs/BlogList";
import BlogDetail from "../components/blogs/BlogDetail";
import BlogLayout from "../components/layout/BlogLayout";
import Navbar from "../components/layout/Navbar";
import { useBlogs } from "../hooks/useBlogs";

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { data } = useBlogs();

  useEffect(() => {
    if (data && data.length > 0 && !selectedId) {
      setSelectedId(Number(data[0].id));
    }
  }, [data]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <BlogLayout>
        <BlogList onSelect={setSelectedId} selectedId={selectedId} />
        <BlogDetail id={selectedId} />
      </BlogLayout>
    </div>
  );
}
