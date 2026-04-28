"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useHandleLogout } from "@/lib/handleLogout";
import LogoutModal from "./reusables/LogoutModal";
import { useAuth } from "./context/AuthContext";

export function UserNav() {
  const { userData, loading, error } = useAuth();
  const { handleLogout, isModalVisible, confirmLogout, cancelLogout } =
    useHandleLogout();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  if (error || !userData) {
    return (
      <div className="flex items-center justify-center">
        <span className="text-red-500 text-sm">Error loading profile</span>
      </div>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="border-black dark:border-white border h-8 w-8">
              {/* Check if profile_image exists, otherwise fallback to initials */}
              {userData.profile_image_url &&
              userData.profile_image_url.trim() !== "" ? (
                <AvatarImage
                  src={userData.profile_image_url}
                  alt="Profile Picture"
                  className="w-10"
                />
              ) : (
                <AvatarFallback className="bg-red-500 dark:bg-green-500 text-white font-semibold">
                  {userData.first_name?.[0]?.toUpperCase() || "U"}
                  {userData.last_name?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              )}
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 z-[99998]">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {userData.first_name} {userData.last_name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {userData.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/dashboard/profile">
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href="/dashboard/settings">
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Logout confirmation modal */}
      <LogoutModal
        isVisible={isModalVisible}
        onConfirm={confirmLogout} // Confirm the logout
        onCancel={cancelLogout} // Cancel the logout
      />
    </>
  );
}
