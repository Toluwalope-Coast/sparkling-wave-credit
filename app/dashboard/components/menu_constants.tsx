// @/dashboard/components/menu_constants.tsx

import {
  BsGear,
  BsHouseDoor,
  BsKanban,
  BsQuestionCircle,
} from "react-icons/bs";
import { SideNavItemGroup } from "../types/type";
import { FaHeadset } from "react-icons/fa";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    id: "1",
    title: "Dashboards",
    menuList: [
      {
        id: "1-1",
        title: "Dashboard",
        path: "/dashboard",
        icon: <BsHouseDoor size={20} />,
      },
    ],
  },
  {
    id: "2",
    title: "Manage",
    menuList: [
      {
        id: "2-1",
        title: "Loans",
        path: "",
        icon: <BsKanban size={20} />,
        submenu: true,
        subMenuItems: [
          {
            id: "2-1-1",
            title: "New Loan",
            path: "/dashboard/loan-application",
          },
          {
            id: "2-1-2",
            title: "Loan History",
            path: "/dashboard/loan-history",
          },
          {
            id: "2-1-3",
            title: "My Loan Attempts",
            path: "/dashboard/loan-requests",
          },
          {
            id: "2-1-4",
            title: "My Unpaid Loans",
            path: "/dashboard/my-unpaid-loans",
          },
        ],
      },
      // {
      //   id: "2-2",
      //   title: "Savings",
      //   path: "/dashboard/savings",
      //   icon: <BsListUl size={20} />,
      // },
      {
        id: "2-3",
        title: "Support",
        path: "/dashboard/support",
        icon: <FaHeadset size={20} />,
      },
    ],
  },
  {
    id: "3",
    title: "Others",
    menuList: [
      {
        id: "3-1",
        title: "Account",
        path: "/dashboard/account",
        icon: <BsGear size={20} />,
      },
      {
        id: "3-2",
        title: "FAQ",
        path: "/dashboard/faqs",
        icon: <BsQuestionCircle size={20} />,
      },
    ],
  },
];
