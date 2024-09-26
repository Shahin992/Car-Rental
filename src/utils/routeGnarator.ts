import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TuserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
};
export const routeGenarator = (item: TuserPaths[]) => {
  const route = item.reduce((arr: TRoute[], item) => {
    if (item.path && item.element) {
      arr.push({
        path: item.path,
        element: item.element,
      });
    }
    return arr;
  }, []);
  return route;
};
