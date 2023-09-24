import { Icons } from "@/components/Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Pickleball Planner account and
          agree to our User Agreement and Privacy Policy.
        </p>

        {/* Sign in form (Client Component) */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="hover:text-slate-500 text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
