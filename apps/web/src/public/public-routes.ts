/**
 * Public-facing route definitions for pages under src/public/.
 */
import { route } from "react-router-typesafe-routes";

// Pathless root — children mount at the URL prefix defined on the parent
// `createBrowserRouter` entry (`"/"`).
export const publicRoutes = route({
  children: {
    index: route({ path: "" }),
    login: route({ path: "login" }),
    register: route({ path: "register" }),
  },
});
