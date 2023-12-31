"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/Button";

interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
  const router = useRouter();

  return (
    <Button
      // variant="subtle"
      className="h-6 w-6 p-0 rounded-md"
      aria-label="close modal"
      // BUG: This might send user back to previous modal if they clicked "create account". See docs: https://nextjs.org/docs/pages/api-reference/functions/use-router
      onClick={() => router.back()}
      // onClick={() => router.replace("/")}
      // onClick={() => router.push('/')}
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default CloseModal;
