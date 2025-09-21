import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Post() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Post</h1>
      <p className="max-w-xl text-center text-muted-foreground">
        You are currently on the post Page. /feed/post which post folder inside
        feed as nested routes.
      </p>
      <Button asChild>
        <Link href="/feed/post/nested">Go to Deeper Nested</Link>
      </Button>
    </div>
  );
}
