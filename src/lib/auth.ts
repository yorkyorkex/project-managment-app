import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Demo authentication - replace with real authentication logic
        if (credentials?.email === "admin@example.com" && credentials?.password === "password") {
          return {
            id: "1",
            email: "admin@example.com",
            name: "John Doe",
            image: null,
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = "Administrator" // You can set roles based on user data
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-expect-error: Adding custom id property to NextAuth session
        session.user.id = token.sub || ""
        // @ts-expect-error: Adding custom role property to NextAuth session
        session.user.role = token.role || "User"
      }
      return session
    },
    async signIn() {
      // Allow all sign-ins for demo purposes
      // Add custom logic here for user validation
      return true
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
}