import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    // pages: {
    //     signIn: '/login',
    // },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
          const isLoggedIn = !!auth?.user;
          const isOnDashboard = nextUrl.pathname.startsWith('/goals');
          if (isOnDashboard) {
            if (isLoggedIn) return true;
            return false; // add comment
          } else if (isLoggedIn) {
            return Response.redirect(new URL('/goals', nextUrl));
          }
          return true;
        },
    },
    providers: [
    ],
} satisfies NextAuthConfig;
