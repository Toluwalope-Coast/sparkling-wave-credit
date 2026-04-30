"use client";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import SideBarMenuGroup from "./sidebar-menu-group";
import { SideBarLogo } from "./sidebar-logo";
import { useSideBarToggle } from "../hooks/use-sidebar-toggle";
import { SIDENAV_ITEMS } from "./menu_constants";
import { X } from "lucide-react";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useHandleLogout } from "@/lib/handleLogout";
import LogoutModal from "./reusables/LogoutModal";

export const SideBar = () => {
  const [mounted, setMounted] = useState(false);
  const { toggleCollapse, invokeToggleCollapse, resetSidebar } =
    useSideBarToggle();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const {
    handleLogout,
    isLoggingOut,
    isModalVisible,
    confirmLogout,
    cancelLogout,
  } = useHandleLogout();

  const asideStyle = classNames(
    "sidebar rounded-2xl overflow-y-auto m-2 overflow-x-auto fixed bg-gradient-to-r from-orange-500 from-10% via-orange-600 via-20% to-red-700 to-90% dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-30% dark:to-emerald-500 dark:to-90% h-[97vh] shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out z-[99999]",
    {
      ["w-[15rem]"]: !toggleCollapse,
      ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse,
    }
  );

  useEffect(() => setMounted(true), []);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Reset sidebar when route changes (only on mobile)
  useEffect(() => {
    if (isMobile) {
      resetSidebar();
    }
  }, [pathname, isMobile, resetSidebar]);

  const overlayStyle = classNames(
    "fixed inset-0 bg-black/50 z-[99998] transition-opacity duration-300 sm:hidden",
    {
      ["opacity-100 visible"]: !toggleCollapse,
      ["opacity-0 invisible"]: toggleCollapse,
    }
  );

  return (
    <div>
      <aside className={asideStyle}>
        <div className="sidebar-top relative flex items-center px-3.5 py-5 w-full justify-between">
          <Link href="/dashboard">{mounted && <SideBarLogo />}</Link>
          <h3
            className={classNames(
              "pr-4 font-bold text-2xl min-w-max text-sidebar-foreground sm:hidden",
              { hidden: toggleCollapse }
            )}
            onClick={invokeToggleCollapse}
          >
            <X size={25} />
          </h3>
        </div>
        <nav className="flex flex-col gap-2 transition-all duration-700 ease-in-out">
          <div className="flex flex-col gap-2 px-4">
            {SIDENAV_ITEMS.map((item, idx) => (
              <SideBarMenuGroup key={idx} menuGroup={item} />
            ))}
          </div>
          <button
            className="text-white flex items-center gap-2 ml-4 hover:font-semibold"
            onClick={handleLogout}
            disabled={isLoggingOut} // Disable button if logging out
          >
            <IoLogOutOutline size={25} />
            <span className="text-lg">
              {isLoggingOut ? "Logging out..." : "Logout"}
            </span>
          </button>

          {/* Logout confirmation modal */}
          <LogoutModal
            isVisible={isModalVisible}
            onConfirm={confirmLogout} // Confirm the logout
            onCancel={cancelLogout} // Cancel the logout
          />
        </nav>
      </aside>
      <div className={overlayStyle} onClick={invokeToggleCollapse} />
    </div>
  );
};
