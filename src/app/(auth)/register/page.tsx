import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Feed() {
  const isRegister = false;
  if (!isRegister) {
    redirect("./login");
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-amber-500">
      <h1>Feed</h1>
      <p className="max-w-xl text-center text-muted-foreground">
        You are currently on the Register Page.
      </p>
      <footer className="grid gap-2">
        <Button asChild>
          <Link href="/login">Register</Link>
        </Button>
      </footer>
    </div>
  );
}
