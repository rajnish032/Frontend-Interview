const BASE_URL = "http://localhost:3001";

export const getBlogs = async () => {
  const res = await fetch(`${BASE_URL}/blogs`);
  return res.json();
};

export const getBlogById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);
  return res.json();
};

export const createBlog = async (data: any) => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
