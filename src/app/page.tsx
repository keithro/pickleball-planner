import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full flex-center flex-col">
        <h1 className="text-center">
          Pickleball Planner Pro
          <br className="max-md:hidden" />
          <span className="text-center">Plan Your Next Game</span>
        </h1>
        <p className="desc text-center">
          Find games near you or plan your own games to get together with
          friends and play some pickleball!
        </p>

        {/* <Feed /> */}
      </section>
    </main>
  );
}
