"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./provider";
import SideMenu from "@/components/SideMenu";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {pathname == "/" ? "" : <SideMenu />}

          <div className="max-w-5xl mx-auto px-8">
            <div className="pt-16">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
