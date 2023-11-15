import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // restrict access to paths that start with the following substrings (api - _next/static - _next/image - .png)

  //this is a "negative lookahead pattern"
  matcher: ["/((?!api|).*)"],
};
