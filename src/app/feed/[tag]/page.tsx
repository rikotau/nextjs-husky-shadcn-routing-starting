"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Dynamic() {
  const params = useParams<{ tag: string }>();
  const tag = params.tag;
  const href = `/feed/${tag}/detail`;
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Dynamic Route</h1>
      <div>
        <p className="max-w-xl text-center text-muted-foreground">
          You are currently on the Dynamic Page. /feed/[{tag}]
        </p>
        <p className="max-w-xl text-center text-muted-foreground">
          Try change /{tag} to antyhing to see how the routes be a dynamic.
          /feed/anything
        </p>
      </div>
      <Button asChild>
        <Link href={href}>Go to Detail</Link>
      </Button>
    </div>
  );
}
