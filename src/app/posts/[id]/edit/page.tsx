import EditPostForm from "@/components/edit-post-form";
import { getPost } from "@/lib/post";
import Link from "next/link";

export default async function EditPost({ params }: { params: { id: number } }) {
  const { id } = await params;

  return (
    <div>
      <Link href={`/`}>
        <button className="px-5 py-2 bg-gray-200 rounded-lg cursor-pointer">
          Back
        </button>
      </Link>
      <EditPostForm postId={id}/>
    </div>
  );
}
