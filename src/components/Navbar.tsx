import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = async () => {
  const session = await getAuthSession();
  // console.log(session);

  return (
    <div className="sticky top-0 inset-x-0 h-fit border-b bg-zinc-50 py-2 z-20">
      <MaxWidthWrapper className="h-full flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 md:h-6 md:w-6" />
          <p className="hidden text-sm font-medium md:block">PB Time</p>
        </Link>

        {/* Sign up / Sign in */}
        {session ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
