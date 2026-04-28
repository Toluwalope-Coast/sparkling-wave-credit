export interface NavLink {
  href: string;
  label: string;
}

export interface iHeaderData {
  navLinks: NavLink[];
  applyNowLink: string;
}

export interface iStep {
  id: string;
  name: string;
  fields?: string[] | number[];
}
