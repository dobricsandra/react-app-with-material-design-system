import { AboutPage, AdminPage, ContactPage, LoginPage, UserPage } from "pages";

interface Route {
  key: string;
  path: string;
  page: React.FunctionComponent;
}

export const routeKeyPathMapper: Record<string, string> = {
  login: "/login",
  about: "/about",
  adminHome: "/admin/home",
  userHome: "/user/home",
  contact: "/contact",
};

export const routes: Route[] = [
  { key: "about", path: routeKeyPathMapper.about, page: AboutPage },
  { key: "admin-home", path: routeKeyPathMapper.adminHome, page: AdminPage },
  { key: "user-home", path: routeKeyPathMapper.userHome, page: UserPage },
  { key: "contact", path: routeKeyPathMapper.contact, page: ContactPage },
  { key: "login", path: routeKeyPathMapper.login, page: LoginPage },
];

// for a given key, return the path
export const getRoutePathFromKey = (key: string) =>
  routes.find((route) => route.key === key)?.path;
