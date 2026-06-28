/**
 * Public-facing route definitions for pages under src/public/.
 *
 * Children mount at the URL prefix defined on the parent
 * `createBrowserRouter` entry (`"/"`). Path segments MUST NOT include
 * leading/trailing slashes — they are composed automatically.
 */
import { route } from "react-router-typesafe-routes";

// Pathless root — children mount at the URL prefix defined on the parent
// `createBrowserRouter` entry (`"/"`).
export const publicRoutes = route({
  children: {
    // Landing pages
    index: route({ path: "" }),
    features: route({ path: "features" }),
    pricing: route({ path: "pricing" }),

    // Resource pages
    docs: route({ path: "docs" }),
    changelog: route({ path: "changelog" }),
    api: route({ path: "api" }),

    // Support pages
    faq: route({ path: "faq" }),
    support: route({ path: "support" }),
    contact: route({ path: "contact" }),
    community: route({ path: "community" }),

    // Legal pages
    terms: route({ path: "terms" }),
    privacy: route({ path: "privacy" }),
    cookies: route({ path: "cookies" }),
  },
});
