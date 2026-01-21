import CreatePostForm from "@/components/create-post-form";
import Link from "next/link";

export default function CreatePost() {
  return (
    <div>
      <Link href={`/`}>
        <button className="px-5 py-2 bg-gray-200 rounded-lg cursor-pointer">
          Back
        </button>
      </Link>
      <CreatePostForm />
    </div>
  );
}
