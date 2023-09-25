import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full flex-center flex-col">
        <h1 className="text-center text-6xl font-bold">
          Pickleball Planner Pro
          {/* <br className="max-md:hidden" /> */}
        </h1>
        <h2 className="text-center text-4xl font-bold">Plan Your Next Game</h2>
        <p className="desc text-center">
          Find games near you or plan your own games to get together with
          friends and play some pickleball!
        </p>

        <Feed />
      </section>
    </main>
  );
}
