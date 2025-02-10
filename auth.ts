import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "@/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        if (credentials == null) return null;
        // Find the user in the database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });
        // Check if user exista and password is correct
        if (user && user.password) {
          const isMatch = compareSync(
            credentials.password as string,
            user.password
          );
          //if password is correct, return user object
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }

        //if user does not exist or password is incorrect, return null
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      //Assign user fields to token
      if (user) {
        token.role = user.role;

        //If user has no name, use email as the default name
        if (user.name === "NO_NAME") {
          token.name = user.email!.split("@")[0];

          //Update the user in the db with the new name
          await prisma.user.update({
            where: { id: user.id },
            data: { name: token.name },
          });
        }
      }
      //Handle session updates
      if (session?.user.name && trigger === 'update') {
        token.name = session.user.name;
      }
      return token;
    },
    async session({ session, trigger, token }: any) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.role = token.role;

      if (trigger === "update" && token.name) {
        session.user.name = token.name;
      }

      return session;
    },
    
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
