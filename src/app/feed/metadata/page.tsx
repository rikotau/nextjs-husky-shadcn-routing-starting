import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metadata | Next.JS",
  description: "Welcome to metadata",
  openGraph: {
    title: "Metadata | Next.JS",
    description: "Welcome to metadata",
    url: "https://metadata.com/",
    siteName: "metadata",
    images: [
      {
        url: "metadata.png",
      },
    ],
  },
};

export default function Metadata() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Metadata</h1>
      <p className="max-w-xl text-center text-muted-foreground">
        You are currently on the Metadata Page. See the title that change to
        custom metadata. Try click to black button with link prefetch build-in
        and gray button when button without pre-fetch (ordinary anchor not Link
        from next).
      </p>
      <div className="grid gap-2">
        <Button asChild>
          <Link href="/feed/metadata">With Link build-in prefetch</Link>
        </Button>
        <Button asChild className="bg-gray-500">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/feed/metadata">With a ordinary anchor</a>
        </Button>
      </div>
    </div>
  );
}
