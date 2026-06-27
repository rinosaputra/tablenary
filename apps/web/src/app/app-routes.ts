/**
 * Authed app route definitions for pages under src/app/.
 */
import { route } from "react-router-typesafe-routes";

// Mounted at `/app` so URLs become `/app`, `/app/settings`, etc.
export const appRoutes = route({
  path: "app",
  children: {
    index: route({ path: "" }),
    settings: route({
      path: "settings",
      children: {
        index: route({ path: "" }),
        profile: route({ path: "profile" }),
      },
    }),
  },
});
