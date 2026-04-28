// @/components/reusables/BottonNavigationComponent.tsx

"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Import router for navigation
import { getTokenFromCookies } from "@/lib/cookies"; // Import token helper

// Reusable NavLink component
export const NavLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType; // Use React.ElementType to allow components with various props
  label: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const token = getTokenFromCookies(); // Get the token from cookies
  const isActive = pathname === href;

  const handleClick = (e: React.MouseEvent) => {
    // If no token is found, redirect the user to the login page
    if (!token) {
      e.preventDefault(); // Prevent the default link navigation
      router.push("/login"); // Redirect to the login page
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick} // Handle click to check for login status
      className={`flex flex-col items-center ${
        isActive
          ? "opacity-100 text-red-500 dark:text-green-500"
          : "opacity-75 text-black dark:text-white"
      }`}
    >
      <Icon size={25} /> {/* Icon now properly receives the size prop */}
      <span className="text-[10px]">{label}</span>
    </Link>
  );
};
