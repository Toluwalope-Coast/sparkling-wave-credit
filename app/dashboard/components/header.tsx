"use client";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { BsList } from "react-icons/bs";
import { UserNav } from "./usernav";
import { useSideBarToggle } from "../hooks/use-sidebar-toggle";
import { ModeToggle } from "@/utils/modeToggler";
import { getSingleApiRequest } from "@/lib/apiRequest";
import { getTokenFromCookies } from "@/lib/cookies";

export default function Header() {
  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
  const [borrower, setBorrower] = useState<{
    first_name: string;
    last_name: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = getTokenFromCookies();

  useEffect(() => {
    const fetchBorrowerData = async () => {
      try {
        if (token) {
          // API request to fetch borrower data
          const data = await getSingleApiRequest("/api/borrowers_me/");
          setBorrower(data); // Assuming response contains borrower data
        } else {
          setError("No token found");
        }
      } catch (err) {
        console.error("Error fetching borrower data:", err);
        setError("Failed to fetch borrower data");
      } finally {
        setLoading(false);
      }
    };

    fetchBorrowerData();
  }, [token]);

  const sidebarToggle = () => {
    invokeToggleCollapse();
  };

  const headerStyle = classNames("bg-sidebar fixed w-full z-[99997] px-4", {
    ["sm:pl-[16rem]"]: !toggleCollapse,
    ["sm:pl-[5.6rem]"]: toggleCollapse,
  });

  return (
    <header className={headerStyle}>
      <div className="h-16 flex items-center justify-between">
        <button
          onClick={sidebarToggle}
          className="shrink-btn float-right bg-sidebar-muted text-sidebar-muted-foreground hover:bg-foreground hover:text-background rounded-md ml-4 w-[30px] h-[30px] flex items-center justify-center shadow-md shadow-black/10  transition duration-300 ease-in-out z-[999999] relative"
        >
          <BsList />
        </button>

        <div className="flex items-center justify-between gap-2 sm:order-2 order-1">
          {loading ? (
            <div className="h-10 w-10 rounded-full bg-sidebar-muted flex items-center justify-center text-center">
              Loading...
            </div>
          ) : error ? (
            <div className="h-10 w-10 rounded-full bg-sidebar-muted flex items-center justify-center text-center">
              {error}
            </div>
          ) : (
            <div className="rounded-full border-0 bg-sidebar-muted flex items-center justify-center text-center gap-1">
              <p className="text-[.8rem]">Welcome,</p>
              <p className="text-[.8rem] font-bold">
                {borrower ? `${borrower.last_name}` : "Unknown Borrower"}
              </p>
              <UserNav />
            </div>
          )}
          <div className="p-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
