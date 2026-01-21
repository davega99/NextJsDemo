"use client";
import { createPost } from "@/lib/post";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePostForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
    try {
      const newPost = await createPost(formData);
      console.log(newPost)
      if (newPost) {
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
            className="w-full px-3 py-2 border rounded-xl mt-2"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label className="text-xl font-medium text-gray-500">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border rounded-xl mt-2"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-gray-200 rounded-lg cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}
