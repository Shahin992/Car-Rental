import { ReactNode } from "react";
import { TuserPaths } from "../../../utils/routeGnarator";
import { NavLink } from "react-router-dom";
export type TSideBar = {
  key: string;
  label: ReactNode;
};
export const SidebarGenarator = (items: TuserPaths[], role: string) => {
  const sitebarItems = items.reduce((arr: TSideBar[], item) => {
    if (item.path && item.name) {
      arr.push({
        key: item.path,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    return arr;
  }, []);
  return sitebarItems;
};
