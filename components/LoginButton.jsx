"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function LoginButton() {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home/news");
    }
  }, [status]);
  return (
    <button
      onClick={() => signIn("github")}
      className="mt-1 bg-slate-800 text-white px-6 py-3 rounded-lg"
    >
      Sign in with Github
    </button>
  );
}
