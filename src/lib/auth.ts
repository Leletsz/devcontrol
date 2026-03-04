import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from 'next-auth/providers/google'
import { NextAuthConfig } from "next-auth";
import { PrismaClient } from "@prisma/client";


export const authOptions: NextAuthConfig ={
    adapter: PrismaAdapter(PrismaClient),
    providers:[
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        })
    ],
    callbacks: {
  async session({ session, user }) {
    if (session.user) {
      session.user.id = user.id
      
    }
    return session
  }
}
}