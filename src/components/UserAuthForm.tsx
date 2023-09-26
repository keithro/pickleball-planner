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
        variant: "destructive", // TODO: Either update color or remove variant.
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      {/* Log in with Google button. */}
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
      >
        {isLoading ? null : <Icons.google className="mr-2 h-4 w-4" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
