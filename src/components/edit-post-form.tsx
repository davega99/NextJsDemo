"use client";
import { getPost, updatePost } from "@/lib/post";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditPostForm({ postId }: { postId: number }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPost(postId);
        if (post) {
          setFormData({
            title: post.title,
            body: post.body,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await updatePost(postId, { ...formData });
      if (result) {
        router.push(`/`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-xl font-medium text-gray-500">Title</label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-xl mt-2"
          ></input>
        </div>
        <div>
          <label className="text-xl font-medium text-gray-500">
            Description
          </label>
          <textarea
            id="description"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            className="w-full px-3 py-2 border rounded-xl mt-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-gray-200 rounded-lg cursor-pointer"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
