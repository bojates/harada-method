// import GitHubProvider from "next-auth/providers/github"
import NextAuth from "next-auth"
import {authOptions} from '@/auth.config'

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }