// @/dashboard/types/types.ts
import type { ReactElement } from "react";

export type SideNavItem = {
  id: string;
  title: string;
  path: string;
  icon?: ReactElement;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type SideNavItemGroup = {
  id: string;
  title: string;
  menuList: SideNavItem[];
};
