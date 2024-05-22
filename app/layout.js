"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./provider";
import SideMenu from "@/components/SideMenu";
import { usePathname } from "next/navigation";
import { createContext } from "react";

const inter = Inter({ subsets: ["latin"] });
export const authContext = createContext();

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const data = "Context Value is here";

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {pathname == "/" ? { ...children } : <SideMenu children={children} />}

          <div className="max-w-5xl mx-auto px-8">
            <authContext.Provider value={data}>
              <div className="pt-16"></div>
            </authContext.Provider>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
