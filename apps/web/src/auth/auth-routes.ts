/**
 * Auth route definitions for pages under src/auth/.
 *
 * Children mount at the URL prefix defined on the parent
 * `createBrowserRouter` entry (`"/"`). Path segments MUST NOT include
 * leading/trailing slashes — they are composed automatically.
 */
import { route } from "react-router-typesafe-routes";

// Pathless root — children mount at the URL prefix defined on the parent
// `createBrowserRouter` entry (`"/"`).
export const authRoutes = route({
  children: {
    login: route({ path: "login" }),
    register: route({ path: "register" }),
  },
});
