import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full flex-center flex-col">
        <h1 className="text-center text-6xl font-bold">PB Time</h1>
        <h2 className="text-center text-4xl font-bold">
          Pickleball Game Planner
        </h2>
        <p className="desc text-center">
          Find your next game! Search for open games near you or plan your own
          games, invite your friends and play some pickleball!
        </p>

        {/* <h1 className="text-center text-6xl font-bold">
          Pickleball
          <br className="max-md:hidden" /> Planner Pro
        </h1>
        <h2 className="text-center text-4xl font-bold"></h2>
        <p className="desc text-center">
          Find games near you or plan your own games to get together with
          friends and play some pickleball!
        </p> */}

        <Feed />
      </section>
    </main>
  );
}
