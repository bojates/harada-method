import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

const handler = NextAuth({
        providers: [
            GitHubProvider({
                clientId: process.env.AUTH_GITHUB_ID ?? "", 
                clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
            }),
        ],
    })
    
export { handler as GET, handler as POST }

// export const authOptions = {
//     providers: [
//         GitHubProvider({
//             clientId: process.env.AUTH_GITHUB_ID ?? "", 
//             clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
//         }),
//     ],
// };
// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST }