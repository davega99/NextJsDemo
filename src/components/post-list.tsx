import { getPosts } from "@/lib/post";
import Link from "next/link";
import DeleteButton from "./delete-button";

export default async function PostsList() {
  const posts = await getPosts();

  return (
    <div className="bg-gray-300 flex flex-col items-start">
      <Link href={`/posts/create`}>
        <button className="px-5 py-2 bg-gray-200 rounded-lg cursor-pointer">
          Add Post
        </button>
      </Link>
      <div className="flex justify-start gap-2.5 flex-wrap p-2">
        {posts &&
          posts.map((post: any) => (
            <div key={post.id}>
              <div className=" border-gray-500 bg-white rounded-lg p-2.5 h-32">
                <div>
                  <h1 className=" text-xl font-medium">{post.title}</h1>
                  <p className=" text-sm text-gray-400">{post.body}</p>
                </div>
                <div className="flex gap-2.5">
                  <Link href={`/posts/${post.id}/edit`}>
                    <button className="mt-2 px-5 py-2 bg-orange-200 font-medium rounded-lg cursor-pointer">
                      Edit
                    </button>
                  </Link>
                  <DeleteButton postId={post.id} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
