import { create } from "zustand";

interface SidebarToggle {
  toggleCollapse: boolean;
  invokeToggleCollapse: () => void;
  resetSidebar: () => void;
  setSidebarState: (collapsed: boolean) => void;
}

export const useSideBarToggle = create<SidebarToggle>((set, get) => ({
  toggleCollapse: false,
  invokeToggleCollapse: () => set({ toggleCollapse: !get().toggleCollapse }),
  resetSidebar: () => set({ toggleCollapse: true }), // Reset to collapsed state
  setSidebarState: (collapsed: boolean) => set({ toggleCollapse: collapsed }),
}));
