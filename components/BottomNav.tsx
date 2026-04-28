// @/components/BottomNav.tsx
"use client";

import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosList } from "react-icons/io";
import { IoGitPullRequestOutline, IoHomeOutline } from "react-icons/io5";
import { NavLink } from "./reuseables/BottomNavbarComponent";
import { useRouter } from "next/navigation"; // Use router for navigation
import { getTokenFromCookies } from "@/lib/cookies"; // Import the function to get token
import { useEffect } from "react";

export const BottomNav = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getTokenFromCookies();
    if (!token) {
      router.push("/login"); // Redirect to login if no token is found
    }
  }, [router]);

  return (
    <div className="dark:bg-[rgba(0, 0, 0, 0.7)] bg-[rgba(225, 225, 225, 0.7)] shadow-[0 4px 30px rgba(225, 225, 225, 0.1)] dark:shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] bottom-morphism fixed flex items-center justify-between border-t-4 border px-8 bottom-0 right-0 w-full h-[56px] sm:hidden">
      <NavLink href="/dashboard" icon={IoHomeOutline} label="Dashboard" />
      <NavLink
        href="/dashboard/loan-application"
        icon={GiTakeMyMoney}
        label="Get Loan"
      />
      <NavLink
        href="/dashboard/loan-requests"
        icon={IoGitPullRequestOutline}
        label="Loan Requests"
      />
      <NavLink
        href="/dashboard/loan-history"
        icon={IoIosList}
        label="Loan History"
      />
    </div>
  );
};
