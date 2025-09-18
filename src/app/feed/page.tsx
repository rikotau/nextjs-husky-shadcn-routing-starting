import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feed() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Feed</h1>
      <p className="max-w-xl text-center text-muted-foreground">
        You are currently on the feed Page.
      </p>
      <div className="grid gap-2">
        <Button asChild>
          <Link href="/feed/post">Try Nested Routes</Link>
        </Button>
        <Button asChild>
          <Link href="/feed/dynamic">Try Dynamic Routes</Link>
        </Button>
        <Button asChild>
          <Link href="/feed/metadata">Try Metadata</Link>
        </Button>
      </div>
    </div>
  );
}
