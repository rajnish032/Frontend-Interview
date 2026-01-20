import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white px-6 py-3 flex items-center justify-between">
      <Link to="/">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">CA Monks</h1>
      </div>
     </Link>
      <div className="flex items-center gap-4">
        <Link to="/">
  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
    Home
  </Button>
</Link>


        <Link to="/create-blog">
          <Button>Create Blog</Button>
        </Link>
      </div>
    </nav>
  );
}
