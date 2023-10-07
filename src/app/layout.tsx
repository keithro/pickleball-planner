import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pickleball-planner-pro",
  description: "Plan and join pickleball games near you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={cn("min-h-screen antialiased light", inter.className)}>
        <Navbar />
        {children}

        {/* <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div> */}

        <Toaster />
      </body>
    </html>
  );
}
