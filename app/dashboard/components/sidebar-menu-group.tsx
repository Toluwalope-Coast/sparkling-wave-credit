// @/dashboard/components/sidebar-menu-group.tsx

import React from "react";
import { SideBarMenuItem } from "./sidebar-menu-item";
import classNames from "classnames";
import { useSideBarToggle } from "../hooks/use-sidebar-toggle";
import { SideNavItemGroup } from "../types/type";

const SideBarMenuGroup = ({ menuGroup }: { menuGroup: SideNavItemGroup }) => {
  const { toggleCollapse } = useSideBarToggle();

  const menuGroupTitleSyle = classNames(
    "py-4 tracking-[.1rem] font-medium uppercase text-sm text-white",
    {
      "text-center": toggleCollapse,
    }
  );
  return (
    <div>
      <h3 className={menuGroupTitleSyle}>
        {!toggleCollapse ? menuGroup.title : "..."}
      </h3>
      {menuGroup.menuList?.map((item) => {
        return <SideBarMenuItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default SideBarMenuGroup;
