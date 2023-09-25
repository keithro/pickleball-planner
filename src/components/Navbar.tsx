import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";

const Navbar = async () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 md:h-6 md:w-6" />
          <p className="hidden text-sm font-medium md:block">
            Pickleball Planner
          </p>
        </Link>

        {/* Sign up / Sign in */}
        <Link href="sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
