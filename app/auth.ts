const bcrypt = require('bcrypt');
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./libs/prisma";
import { authConfig } from './auth.config';

const login = async (credentials: Partial<Record<string, unknown>>) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: credentials.username as string
      }
    })

    if (!user) throw new Error('User not found');

    const isValid = await bcrypt.compare(credentials.password, user.password);
    if (!isValid) throw new Error('Invalid password');

    return {
      id: user.id,
      name: user.name + ' ' + user.last_name,
      image: user.avatar,
      is_admin: user.is_admin
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && 'name' in user) {
        token.name = user.name;
      }
      if (user && 'image' in user) {
        token.picture = user.image;
      }
      if (user && 'is_admin' in user) {
        token.rol = user.is_admin;
      }
      return token;
    },
    async session({ session, token }) {
      if(token){
        if(session.user){
          session.user = {
            ...session.user,
            name: token.name,
            image: token.picture,
            // is_admin: token.rol,
          };
        }
      }
      return session;
    }
  }
})