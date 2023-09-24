import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link href="/">
          <ChevronLeft className="" />
          Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
