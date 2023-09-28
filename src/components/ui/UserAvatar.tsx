import { User } from "next-auth";
import { Avatar, AvatarFallback } from "./Avatar";
import Image from "next/image";
import { Icons } from "../Icons";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  // From Next auth, not Prisma client
  user: Pick<User, "name" | "image">;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        // Fallback
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user className="h-6 w-6" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
