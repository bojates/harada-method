import type { NextAuthConfig } from 'next-auth';
import GitHubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.AUTH_GITHUB_ID ?? "", 
            clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
        }),
    ],
} satisfies NextAuthConfig;
