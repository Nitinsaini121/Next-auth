"use client";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function HomePage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <div>
      <SideMenu />
    </div>
  );
}

export default HomePage;
