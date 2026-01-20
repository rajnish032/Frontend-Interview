import Navbar from "../components/layout/Navbar";
import CreateBlogForm from "../components/blogs/CreateBlogForm";

export default function CreateBlogPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="max-w-2xl mx-auto w-full p-6">
        <CreateBlogForm />
      </div>
    </div>
  );
}
