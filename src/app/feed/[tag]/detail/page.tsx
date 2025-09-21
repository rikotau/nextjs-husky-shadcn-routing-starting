"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Dynamic() {
  const params = useParams<{ tag: string }>();
  const tag = params.tag;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Detail On [{tag}]</h1>
      <p className="max-w-xl text-center text-muted-foreground">
        You are currently on the Nested Dynamic Page. /feed/[{tag}]/detail which
        detail folder inside dynamic as nested routes. Try change dynamic addres
        and detail
      </p>
      <Button asChild>
        <Link href="/feed/another/anythings">Try Another Routes</Link>
      </Button>
    </div>
  );
}
