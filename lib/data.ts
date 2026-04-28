export const headerData: iHeaderData = {
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    // { href: "/loans", label: "Loans" },
    { href: "/services", label: "Services" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ],
  applyNowLink: "/login",
};

import { LucideIcon, Settings } from "lucide-react";

export interface ISidebarNavItem {
  title: string;
  path: string;
  icon?: LucideIcon; // Change the type to accept string names
  submenu?: boolean;
  subMenuItems?: ISidebarNavItem[];
}

export interface ISidebarMenuItemProps {
  item: ISidebarNavItem;
}

import { iHeaderData, iStep } from "./types";

export const steps: iStep[] = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["phoneNumber", "bankCode", "accountNumber"],
  },
  {
    id: "Step 2",
    name: "Loan Application",
    fields: ["desiredAmount", "duration"],
  },
  { id: "Step 3", name: "Confirmation" },
];
