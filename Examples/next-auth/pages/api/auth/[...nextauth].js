import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GitHubProvider({
        clientId:"050cd58737b0bfc23783" ,
        clientSecret: "acd78b76902dc9b421b54a8010424c7dc299ef33",
      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        }})
      // ...add more providers here
    ],
  }
  export default NextAuth(authOptions)
  