const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnStore = nextUrl.pathname.startsWith("/store");

      if (isOnStore && !isLoggedIn) {
        // Redirect to the sign-in page if trying to access store without login
        return Response.redirect(new URL("/login", nextUrl));
      }

      // Allow access to other pages if logged in or not on the store page
      return true;
    },
  },
};

export { authConfig };
