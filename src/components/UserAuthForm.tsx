"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { Button } from "./ui/Button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      // throw new Error(); // REMOVE
      await signIn("google");
    } catch (error) {
      // Toast notification
      toast({
        title: "There was a problem.",
        description: "There was an error logging in with Google",
        // variant: "destructive", // TODO: Either remove variant or change color of "destructive"
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        // disabled={isLoading}
      >
        {isLoading ? null : <Icons.google className="mr-2 h-4 w-4" />}
        Google
      </Button>

      {/* <button
        type="button"
        className="w-full flex"
        onClick={loginWithGoogle}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Log In
      </button> */}
    </div>
  );
};

export default UserAuthForm;
