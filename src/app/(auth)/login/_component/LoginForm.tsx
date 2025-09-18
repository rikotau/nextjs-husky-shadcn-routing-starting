"use client";

import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/dashboard");
  };
  const handleRegister = () => {
    redirect("/register");
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 bg-gray-100">
      <h1>LoginForm</h1>
      <p className="max-w-xl text-center text-muted-foreground">
        This is login form.
      </p>
      <div className="grid gap-2">
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleRegister}>Register</Button>
      </div>
    </div>
  );
}
