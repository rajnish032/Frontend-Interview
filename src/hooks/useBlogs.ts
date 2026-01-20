import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, getBlogById, createBlog } from "../context/blogApi";

export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

export const useBlog = (id: number | null) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(Number(id)),
    enabled: !!id,
  });

export const useCreateBlog = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
