import Feed from "@/components/Feed";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  const btnList = ["default", "destructive", "outline", "secondary", "ghost"];

  return (
    <>
      <MaxWidthWrapper className="pb-12 pt-20 sm:pt-32 text-center flex flex-col items-center justify-center">
        {/* "Now Live pill" */}
        <div className="mx-auto mb-6 sm:mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            PB Time is now live!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold mb-4 md:text-6xl lg:text-7xl">
          Serving Up More Pickleball{" "}
          <span className="text-fuchsia-900">Anytime, Anywhere</span>
        </h1>
        <p className="text-muted-foreground max-w-prose">
          Elevate your pickleball experience! Search for games near going on in
          your area or start your own, invite your friends and smash your next
          match. Its pickleball planned to perfection.
        </p>
      </MaxWidthWrapper>

      <div className="grid grid-cols-2 gap-2">
        {btnList.map((btn, i) => {
          return (
            <div key={i} className="h-32 grid place-content-center">
              <Button variant={btn}>{btn}</Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
