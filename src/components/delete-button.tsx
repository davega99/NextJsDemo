'use client'
import { deletePost } from "@/lib/post";
import { useRouter } from "next/navigation";

export default function DeleteButton({ postId }: { postId: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await deletePost(postId);
      if (res) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="mt-2 px-5 py-2 bg-red-200 font-medium rounded-lg cursor-pointer"
    >
      Delete
    </button>
  );
}
