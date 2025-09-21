"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Dynamic() {
  const params = useParams<{ tag: string; item: string }>();
  const tag = params.tag;
  const item = params.item;
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>OPSIONAL On Dynamic</h1>
      <p className="max-w-xl text-center text-muted-foreground">
        You are currently on the Opsional Dynamic Page. /feed/[{tag}]/[...{item}
        ] which catch all routes inside [{tag}] as opsional routes. Try change{" "}
        {tag} addres and {item}
      </p>
      <Button asChild>
        <Link href="/feed">Back to Feed</Link>
      </Button>
    </div>
  );
}
