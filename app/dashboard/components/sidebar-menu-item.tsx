// @/dashboard/components/sidebar-menu-items.tsx

"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { SideNavItem } from "../types/type";
import { useSideBarToggle } from "../hooks/use-sidebar-toggle";

interface SideBarMenuItemProps {
  item: SideNavItem;
}

export const SideBarMenuItem: React.FC<SideBarMenuItemProps> = ({ item }) => {
  const { toggleCollapse, resetSidebar } = useSideBarToggle();
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  // Close sidebar on mobile when navigating
  const handleNavigation = () => {
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      resetSidebar();
    }
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const inactiveLink = classNames(
    "flex items-center min-h-[40px] h-full text-white py-2 px-4 hover:text-sidebar-muted-foreground  hover:bg-sidebar-muted rounded-md transition duration-200",
    { ["justify-center"]: toggleCollapse }
  );

  const activeLink = classNames(
    "text-sidebar-muted-foreground bg-sidebar-muted bg-gradient-to-r from-orange-300 from-10% via-orange-400 via-20% to-red-700 to-90% dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-30% dark:to-emerald-500 dark:to-90%"
  );

  const navMenuDropdownItem =
    "text-red py-2 px-4 hover:text-sidebar-muted-foreground text-white transition duration-200 rounded-md";

  const dropdownMenuHeaderLink = classNames(inactiveLink, {
    ["bg-sidebar-muted rounded-b-none transition-all duration-700 ease-in-out"]:
      subMenuOpen,
  });

  return (
    <div>
      {item.submenu ? (
        <div className="min-w-[18px]">
          <Link
            href={item.path}
            className={`${dropdownMenuHeaderLink} ${
              pathname.includes(item.path) ? activeLink : ""
            }`}
            onClick={(e) => {
              toggleSubMenu();
              handleNavigation();
            }}
          >
            <div className="min-w-[20px]">{item.icon}</div>
            {!toggleCollapse && (
              <div className="flex items-center gap-2">
                <span className="ml-3 text-base leading-6 font-semibold cursor-pointer">
                  {item.title}
                </span>
                <BsChevronRight
                  className={`${
                    subMenuOpen ? "rotate-90" : ""
                  } ml-auto stroke-2 text-xs`}
                />
              </div>
            )}
          </Link>
          {subMenuOpen && !toggleCollapse && (
            <div className="bg-sidebar-muted border-l-4">
              <div className="grid gap-y-2 leading-5 py-3">
                {item.subMenuItems?.map((subItem) => (
                  <Link
                    key={subItem.id} // Use subItem.id for key
                    href={subItem.path}
                    className={`${navMenuDropdownItem} ${
                      subItem.path === pathname
                        ? "text-sidebar-muted-foreground font-medium bg-gradient-to-r from-orange-300 from-10% via-orange-400 via-20% to-red-700 to-90% dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-30% dark:to-emerald-500 dark:to-90%"
                        : "text-sidebar-foreground"
                    }`}
                    onClick={handleNavigation}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={`${inactiveLink} ${
            item.path === pathname ? activeLink : ""
          }`}
          onClick={handleNavigation}
        >
          <div className="min-w-[20px]">{item.icon}</div>
          {!toggleCollapse && (
            <span className="ml-3 leading-6 font-semibold">{item.title}</span>
          )}
        </Link>
      )}
    </div>
  );
};
