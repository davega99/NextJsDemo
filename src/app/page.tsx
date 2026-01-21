import PostsList from "@/components/post-list";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <PostsList />
      </Suspense>
    </div>
  );
}
