import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>DASHBOARD</h1>
      <p className="max-w-xl text-center text-muted-foreground">
        You are currently on the dashboard. Routing with Next.js makes easier
        and faster.
      </p>
      <div className="grid gap-2">
        <Button asChild>
          <Link href="/feed">Go To Routes</Link>
        </Button>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
