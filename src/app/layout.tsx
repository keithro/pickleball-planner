import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="main border">
          <div className="gradient" />
        </div> */}

        <main className="app">
          <Nav />

          {children}
        </main>
      </body>
    </html>
  );
}
