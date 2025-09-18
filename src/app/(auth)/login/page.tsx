import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginForm from "./_component/LoginForm";

export default function Login() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Login</h1>
      <LoginForm />
      <p className="max-w-xl text-center text-muted-foreground">
        You are currently on the Login Page. Try Login or register and see how
        the redirect with/without middleware is work.
      </p>
      <footer className="grid gap-2">
        <Button asChild>
          <Link href="/feed">Trying Nested Routes</Link>
        </Button>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </footer>
    </div>
  );
}
