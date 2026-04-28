// @/dashboard/types/types.ts

export type SideNavItem = {
  id: string;
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type SideNavItemGroup = {
  id: string;
  title: string;
  menuList: SideNavItem[];
};
