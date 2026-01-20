import { useState } from "react";
import { useCreateBlog } from "../../hooks/useBlogs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function CreateBlogForm() {
  const { mutate, isPending } = useCreateBlog();

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    coverImage: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    if (!form.title || !form.description || !form.content) {
      alert("Title, Description and Content are required!");
      return;
    }

    mutate(
      {
        ...form,
        category: form.category
          ? form.category.split(",").map((c) => c.trim())
          : [],
        date: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          setForm({
            title: "",
            description: "",
            content: "",
            coverImage: "",
            category: "",
          });
        },
      },
    );
  };

  return (
    <div className="max-w-2xl mx-auto w-full p-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Create New Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input
                name="title"
                value={form.title}
                placeholder="Enter blog title"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Category</label>
              <Input
                name="category"
                value={form.category}
                placeholder="TECH, FINANCE"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Cover Image URL</label>
            <Input
              name="coverImage"
              value={form.coverImage}
              placeholder="https://example.com/image.jpg"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Short Description</label>
            <Input
              name="description"
              value={form.description}
              placeholder="Brief summary of the blog"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Full Content</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Write your full blog content here..."
              className="w-full min-h-[150px] p-3 border rounded-md focus:outline-none"
            />
          </div>

          <Button  onClick={submit} disabled={isPending} className="bg-blue-500 hover:bg-blue-600 text-white" >
            {isPending ? "Creating..." : "Create Blog"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
