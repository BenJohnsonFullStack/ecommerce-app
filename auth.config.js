const authConfig = {
  providers: [],
  pages: {
    // assign login page
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // set restricted routes
      const isOnStore = nextUrl.pathname.startsWith("/store");
      // authenticate/authorize
      if (isOnStore) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        // redirect to store if logged in already
        return Response.redirect(new URL("/store", nextUrl));
      }
      // allow all other routes access without login
      return true;
    },
  },
};

export { authConfig };
