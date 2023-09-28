"use client";

import { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import UserAvatar from "./ui/UserAvatar";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserAccountNavProps {
  // interface "User" from Next Auth
  user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav: React.FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          // className="h-8 w-8"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="" align="end">
        {/* <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate font-small text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div> */}
        <div className="flex flex-col justify-start p-2 space-y-1 leading-none">
          {/* <div className="flex space-y-1 "> */}
          {user.name && <p className="font-medium">{user.name}</p>}
          {user.email && (
            <p className="w-[200px] truncate font-small text-muted-foreground">
              {user.email}
            </p>
          )}
          {/* </div> */}
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/">Home</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/create">Create</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
